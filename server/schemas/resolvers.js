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
    addProject: async (parent, { projectTitle, user_id }) => {
      const project = await Project.create({ projectTitle });

      await User.findOneAndUpdate(
        { user_id },
        {
          $push: { projects: project },
        }
      );

      return project;
    },
    addComponent: async (
      parent,
      { title, compType, links, imageUrl, text, contact, project_id }
    ) => {
      const component = await Component.create({
        title,
        compType,
        links,
        imageUrl,
        text,
        contact,
      });

      await Project.findOneAndUpdate(project_id, {
        $push: { componentArray: component },
      });

      return component;
    },
  },
};

module.exports = resolvers;
