import { gql } from "@apollo/client";

//Queries all users with subdocuments
export const QUERY_ALL_USERS = gql`
  query Query {
    users {
      _id
      username
      email
      projects {
        _id
        projectTitle
        componentArray {
          _id
          title
          compType
          imageUrl
          text
          contact
        }
      }
    }
  }
`;

//queries single user with all projects
export const QUERY_USER = gql`
  query Query($userId: ID!) {
    user(user_id: $userId) {
      _id
      username
      email
      projects {
        _id
        projectTitle
        componentArray {
          _id
          title
          compType
          imageUrl
          text
          contact
        }
      }
    }
  }
`;

//queries a single project
export const QUERY_PROJECTS = gql`
  query Project($projectId: ID!) {
    project(project_id: $projectId) {
      _id
      projectTitle
      componentArray {
        _id
        title
        compType
        imageUrl
        text
        contact
      }
    }
  }
`;
