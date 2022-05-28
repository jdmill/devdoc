const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    projects: [Project]
  }

  type Project {
    _id: ID
    username: String
    projectTitle: String
    componentArray: [Component]
  }

  type Component {
    _id: ID
    title: String
    compType: String
  }

  type Query {
    user(username: String): User
    users: [User]
    project(username: String): Project
    componentArray(project: ID!): [Component]
    component(_id: ID!): Component
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addProject(projectTitle: String!, username: String!): Project
    removeUser(username: ID!): User
    removeProject(username: ID!, projectTitle: String!): Project
  }
`;

module.exports = typeDefs;
