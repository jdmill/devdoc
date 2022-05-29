const { User, Project, Component } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    //queries by the user id
    user: async (parent, { user_id }) => {
      return User.findOne({ user_id });
    },
    //queries by the projectId
    project: async (parent, { project_id }) => {
      return Project.findOne({ project_id });
    },
  },
  Mutation: {
    // We need to change this if and when we add Auth
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
    //updates user with allowed args
    updateUser: async (parent, args, { user_id }) => {
      return await User.findOneAndUpdate({ user_id }, args, { new: true });
    },
    //deletes user
    removeUser: async (parent, args, { user_id }) => {
      return await User.findOneAndDelete({ user_id });
    },
    //creates a project and pushes it to the users project array
    addProject: async (parent, { projectTitle, user_id }) => {
      const project = await Project.create({ projectTitle });

      await User.findOneAndUpdate(
        { user_id },
        {
          $push: { projects: project },
        },
        { new: true }
      );

      return project;
    },
    //deletes Project model and project subdoc in user model
    removeProject: async (parent, { user_id, project_id }) => {
      await User.findOneAndUpdate(
        { user_id },
        {
          $pull: { projects: { _id: project_id } },
        }
      );
      return await Project.findOneAndDelete({ project_id });
    },
    //creates a component and pushes it to a projects component array
    addComponent: async (
      parent,
      { title, compType, links, imageUrl, text, contact, project_id }
    ) => {
      const component = new Component({
        title,
        compType,
        links,
        imageUrl,
        text,
        contact,
      });

      await Project.findOneAndUpdate(
        project_id,
        {
          $push: { componentArray: component },
        },
        { new: true }
      );

      return component;
    },
    removeComponent: async (parent, { project_id, component_id }) => {
      return await Project.findOneAndUpdate(
        { project_id },
        {
          $pull: { componentArray: { _id: component_id } },
        },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
