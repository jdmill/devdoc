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
    projectTitle: String
    componentArray: [Component]
  }

  type Component {
    _id: ID!
    title: String
    compType: String!
    imageUrl: String
    text: String
    contact: Boolean
  }

  type Query {
    user(user_id: ID!): User
    users: [User]
    project(project_id: ID!): Project
    component(component_id: ID!): Component
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addProject(projectTitle: String!, user_id: ID!): Project
    addComponent(
      _id: ID!
      title: String
      compType: String!
      imageUrl: String
      text: String
      contact: Boolean
    ): Component
    removeUser(user_id: ID!): User
    removeProject(project_id: ID!): Project
  }
`;

module.exports = typeDefs;
