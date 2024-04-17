// Layout.jsx
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeContent from '../Container/HomeContent/HomeContent';
import Container from '../Container/Container'
import { useLocation } from 'react-router-dom';


const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="layout">
            <Header />
            <main>
                <Container />
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout
