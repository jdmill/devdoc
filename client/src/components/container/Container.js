import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../header/Header';
import SignUp from '../signUp/SignUp';
import Login from '../login/Login';
import MyProjects from '../myProjects/MyProjects';
import ProjectEditor from '../projectEditor/ProjectEditor';
import ComponentEditor from '../componentEditor/ComponentEditor';
import Footer from '../footer/Footer';
import styles from './container.css';

function Container() {
    return (
        <Router>
            <Header />
            <Route path="/app/signup" element={<SignUp />}/>
            <Route path="/app/login" element={<Login />}/>
            <Route path="/app/projects" element={<MyProjects />}/>
            <Route path="/app/projects/:projectId" element={<ProjectEditor />}/>
            <Route path="/app/projects/:projectId/:componentId" element={<ComponentEditor />}/>
            <Footer />
        </Router>
    )
};

export default Container;