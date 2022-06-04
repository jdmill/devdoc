const { AuthenticationError } = require("apollo-server-express");
const e = require("express");
const { User, Project, Component } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    // queries by the user id
    user: async (parent, { user_id }) => {
      return User.findOne({ _id: user_id });
    },

    loggedInUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // queries by the projectId
    project: async (parent, { project_id }) => {
      return Project.findOne({ _id: project_id });
    },

    //need both project id and component id to iterate through array
    component: async (parent, {project_id, component_id}) => {
      const proj = await Project.findOne({ _id: project_id }); // go get the whole project (target by id)
      const comp = proj.componentArray.filter((comp) => comp._id === component_id);
      return comp[0];
    }
  },

  Mutation: {
    // Authorization added upon account creation
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // Authorization and Login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email: email });

      if (!user) {
        throw new AuthenticationError("This user does not exist");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // updates user with allowed args
    updateUser: async (parent, args, { user_id }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate({ _id: user_id }, args, { new: true });
      }
    },
    // deletes user
    removeUser: async (parent, args, { user_id }, context) => {
      if (context.user) {
        return await User.findOneAndDelete({ _id: user_id });
      }
    },
    // creates a project and pushes it to the users project array
    addProject: async (parent, { projectTitle, user_id }, context) => {
      if (context.user) {
        const project = await Project.create({ projectTitle });

        await User.findOneAndUpdate(
          { _id: user_id },
          {
            $push: { projects: project },
          },
          { new: true }
        );

        return project;
      }
    },
    // deletes Project model and project subdoc in user model
    removeProject: async (parent, { user_id, project_id }, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: user_id },
          {
            $pull: { projects: { _id: project_id } },
          }
        );
        return await Project.findOneAndDelete({ project_id });
      }
    },
    // creates a component and pushes it to a projects component array
    addComponent: async (
      parent,
      { title, compType, links, imageUrl, text, contact, project_id },
      context
    ) => {
      if (context.user) {
        const component = new Component({
          title,
          compType,
          links,
          imageUrl,
          text,
          contact,
        });

        await Project.findOneAndUpdate(
          { _id: project_id },
          {
            $push: { componentArray: component },
          },
          { new: true }
        );

        return component;
      }
    },
    removeComponent: async (parent, { project_id, component_id }, context) => {
      if (context.user) {
        return await Project.findOneAndUpdate(
          { _id: project_id },
          {
            $pull: { componentArray: { _id: component_id } },
          },
          { new: true }
        );
      }
    },
    
    // had to target the array of a project, target and edit one component and return new entire array with the updated component
    editComponent: async (parent, { project_id, component_id, title, text, imageUrl }, context) => {
      if (context.user) {
        const proj = await Project.findOne({ _id: project_id }); // go get the whole project (target by id)
        const compArr = proj.componentArray; // set its componentArray to a variable

        const newCompArr = compArr.map((el) => { // iterate through...
          if (el.id === component_id){ // do the things when the component id matches the mutation request...
            // update the title, text, imageUrl (if in the api call AND not an empty string)
            if (title) { el.title = (title.length > 0) ? title : el.title; };
            if (text) { el.text = (text.length > 0) ? text : el.text; }
            if (imageUrl) { el.imageUrl = (imageUrl.length > 0) ? imageUrl : el.imageUrl; };
          };
          return el; // repopulate array
        });
        const editedProj = await Project.findOneAndUpdate(
          { _id: project_id }, // target by id
          {
            $set: { componentArray: newCompArr }, // overwrite entire array with the one component updated
          },
          { new: true } // return the project post update
        );
        
        console.log("edit component ran");
        return editedProj; //return the project
      };
    },
  },
};

module.exports = resolvers;
