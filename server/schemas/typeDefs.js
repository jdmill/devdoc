const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    skills: [String]!
  }

  type Query {
    Users: [User]!
    User(UserId: ID!): User
  }

  type Mutation {
    addUser(name: String!): User
    addSkill(UserId: ID!, skill: String!): User
    removeUser(UserId: ID!): User
    removeSkill(UserId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;
