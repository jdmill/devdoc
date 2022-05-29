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
      project_id: ID!
      title: String
      compType: String!
      imageUrl: String
      text: String
      contact: Boolean
    ): Component
    updateUser(user_id: ID!, email: String, password: String): User
    removeUser(user_id: ID!): User
    removeProject(user_id: ID!, project_id: ID!): Project
    removeComponent(project_id: ID!, component_id: ID!): Component
  }
`;

module.exports = typeDefs;
