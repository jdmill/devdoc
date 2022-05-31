import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import styles from './container.css';

function Container() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Container;