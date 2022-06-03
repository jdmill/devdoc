const { AuthenticationError } = require("apollo-server-express");
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
    // TODO: double check this is working/ not sure I got the syntax right to update an array in an object
    editComponent: async (parent, args, { project_id, component_id }, context) => {
      if (context.user) {
        return await Project.findOneAndUpdate(
          { _id: project_id },
          {
            $set: { componentArray: { _id: component_id }, args },
          },
          { new: true }
        );
      }
    },
  },
};

module.exports = resolvers;
