import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
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

export const REMOVE_PROJECT = gql`
  mutation Mutation($userId: ID!, $projectId: ID!) {
    removeProject(user_id: $userId, project_id: $projectId) {
      _id
      projectTitle
    }
  }
`;

// All components are added with just this one mutation type. The compType gets passed in as a variable by the creation button, and then every value is filled with a default placeholder the user can edit later
export const ADD_COMPONENT = gql`
  mutation AddComponent($projectId: ID!, $compType: String!, $contact: Boolean!, $title: String) {
    addComponent(project_id: $projectId, compType: $compType, contact:$contact, title:$title) {
      _id
      title
      compType
      imageUrl
      text
      contact
    }
  }
`;

export const EDIT_COMPONENT = gql`
mutation EditComponent($projectId: ID!, $componentId: ID!, $title: String, $text: String, $imageUrl: String) {
  editComponent(project_id: $projectId, component_id: $componentId, title: $title, text: $text, imageUrl: $imageUrl) {
    _id
    title
    imageUrl
    text
  }
}
`;

export const REMOVE_COMPONENT = gql`
mutation RemoveComponent($projectId: ID!, $componentId: ID!) {
  removeComponent(project_id: $projectId, component_id: $componentId) {
    _id
    title
  }
}
`;