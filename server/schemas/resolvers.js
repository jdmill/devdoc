const { User } = require("../models");

const resolvers = {
  Query: {
    Users: async () => {
      return User.find();
    },

    User: async (parent, { UserId }) => {
      return User.findOne({ _id: UserId });
    },
  },

  Mutation: {
    addUser: async (parent, { name }) => {
      return User.create({ name });
    },
    addProject: async (parent, { UserId, project }) => {
      return User.findOneAndUpdate(
        { _id: UserId },
        {
          $addToSet: { projects: project },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (parent, { UserId }) => {
      return User.findOneAndDelete({ _id: UserId });
    },
    removeProject: async (parent, { UserId, project }) => {
      return User.findOneAndUpdate(
        { _id: UserId },
        { $pull: { projects: project } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
