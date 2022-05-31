import { Link } from 'react-router-dom';
import styles from './navbar.css';

function Navbar() {

    // const handleLogout = () => { TODO: logout logic, mutation for logout request }

    return (
        <ul className="nav__list">
            <Link className="nav__item" to="/" >Home</Link>
            <Link className="nav__item" to="/app/projects" >My Projects</Link>
            <Link className="nav__item" to="/" /*onClick={handleLogout}*/ >Logout</Link>
        </ul>
    );
};

export default Navbar;