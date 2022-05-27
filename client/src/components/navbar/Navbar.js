import { Link } from 'react-router-dom';

function Navbar() {

    // const handleLogout = () => { TODO: logout logic, mutation for logout request }

    return (
        <ul className="nav__list">
            <Link to="/" >Home</Link>
            <Link to="/app/projects" >My Projects</Link>
            <Link to="/" /*onClick={handleLogout}*/ >Logout</Link>
        </ul>
    );
};

export default Navbar;