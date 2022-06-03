import Nav from '../navbar/Navbar';
import './header.css';

function Header() {
    return (
        <header className="devdr__header">
            <div className="container">
                <div className="header__content">
                    <h1 className="header__title">Dev Doctor</h1>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;