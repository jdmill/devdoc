import Nav from '../navbar/Navbar';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="headerContent">
                    <h1>Dev Doctor</h1>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;