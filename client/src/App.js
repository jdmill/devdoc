import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Container from "./components/container/Container";
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import MyProjects from './components/myProjects/MyProjects';
import ProjectEditor from './components/projectEditor/ProjectEditor';
import ComponentEditor from './components/componentEditor/ComponentEditor';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="app" element={<Container />}>
            <Route path="signup" element={<SignUp />}/>
            <Route path="login" element={<Login />}/>
            <Route path="projects" element={<MyProjects />}/>
            <Route path="projects/:projectId" element={<ProjectEditor />}/>
            <Route path="projects/:projectId/:componentId" element={<ComponentEditor />}/>
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
