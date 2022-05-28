const { User, Project, Component } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },
  Mutation: {
    // We need to change this if and when we add Auth
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
    addProject: async (parent, { projectTitle, username }) => {
      const project = new Project({ projectTitle });

      await User.findOneAndUpdate(username, {
        $push: { projects: project },
      });

      return project;
    },
    // addComponent:
    // removeUser: async (parent, { UserId }) => {
    //   return User.findOneAndDelete({ _id: UserId });
    // },
    // removeProject: async (parent, { UserId, project }) => {
    //   return User.findOneAndUpdate(
    //     { _id: UserId },
    //     { $pull: { projects: project } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
