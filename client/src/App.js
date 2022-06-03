/* =========================================================================
 * library and NPM imports
 * ========================================================================= */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* =========================================================================
 * component imports
 * ========================================================================= */
import LandingPage from "./components/landingPage/LandingPage";
import Container from "./components/container/Container";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/login/Login";
import MyProjects from "./components/myProjects/MyProjects";
import ProjectEditor from "./components/projectEditor/ProjectEditor";
import ComponentEditor from "./components/componentEditor/ComponentEditor";
import { EditorProvider } from "./utils/EditorState";

import Playground from './userComps/stylePlayground/StylePlayground'; // delete after setting up all user styles and components, or configure as a route for users to see and browse available styles

/* =========================================================================
 * Using Apollo to manage sessions / tokens
 * ========================================================================= */
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Request middleware to attach JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("session_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/* =========================================================================
 * JSX
 * ========================================================================= */
function App() {
  return (
    <ApolloProvider client={client}>
      <EditorProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="app" element={<Container />}>
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />

              <Route path="projects" element={<MyProjects />} />

              <Route path="projects/:projectId" element={<ProjectEditor />} />
              <Route
                path="projects/:projectId/:componentId"
                element={<ComponentEditor />}
              />
            </Route>
            <Route path='playground' element={<Playground />} />
          </Routes>
        </Router>
      </EditorProvider>
    </ApolloProvider>
  );
}

export default App;
