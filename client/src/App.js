import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Container from './components/container/Container';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return ( 
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/app/" element={<Container />}/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
