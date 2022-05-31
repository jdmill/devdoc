import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation AddProject($projectTitle: String!, $userId: ID!) {
    addProject(projectTitle: $projectTitle, user_id: $userId) {
      _id
      projectTitle
    }
  }
`;

//We will have to add separate mutations for each component depending on what params are required
//need to fix links issues for nav
// export const ADD_COMPONENT_HEADER = gql``;

//hero component Mutation
export const ADD_COMPONENT_HERO = gql`
  mutation AddProject($projectId: ID!, $compType: String!, $imageUrl: String) {
    addComponent(
      project_id: $projectId
      compType: $compType
      imageUrl: $imageUrl
    ) {
      _id
      compType
      imageUrl
    }
  }
`;

//adds article with image component
export const ADD_COMPONENT_ARTICLE_IMG = gql`
  mutation AddProject(
    $projectId: ID!
    $compType: String!
    $imageUrl: String
    $text: String
  ) {
    addComponent(
      project_id: $projectId
      compType: $compType
      imageUrl: $imageUrl
      text: $text
    ) {
      _id
      compType
      imageUrl
      text
    }
  }
`;

//adds the contact form component to the component array in a project
export const ADD_COMPONENT_CONTACT = gql`
  mutation AddProject(
    $projectId: ID!
    $compType: String!
    $imageUrl: String
    $text: String
  ) {
    addComponent(
      project_id: $projectId
      compType: $compType
      imageUrl: $imageUrl
      text: $text
    ) {
      _id
      compType
      title
    }
  }
`;
