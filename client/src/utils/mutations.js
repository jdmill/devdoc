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

export const ADD_PROJECT = gql`
  mutation Mutation($projectTitle: String!, $userId: ID!) {
    addProject(projectTitle: $projectTitle, user_id: $userId) {
      _id
      projectTitle
    }
  }
`;

//We will have to add separate mutations for each component depending on what params are required

//need to fix links issues
export const ADD_COMPONENT_HEADER = gql``;
