const { gql } = require("apollo-server-express");

//~~~~~~~ Links need to be added to this mutation~~~~~~
//~~~~~~~ We need to add links here ~~~~~~~
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    projects: [Project]
  }

  # Auth type to handle returning data from a user creating or user login
  type Auth {
    token: ID!
    user: User
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
    loggedInUser: User
  }

  # addUser takes in user information as input and returns an Auth object
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
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
    editComponent(
      title: String
      imageUrl: String
      text: String
      contact: Boolean
    ): Component
  }
`;

module.exports = typeDefs;
