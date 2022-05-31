import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './container.css';

function Container() {
    return (
        <div className='app__view'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Container;