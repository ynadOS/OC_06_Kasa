import '../Container/Container.scss'
import { useLocation } from 'react-router-dom';
import HomeContent from './HomeContent/HomeContent'
import AboutContent from './AboutContent/AboutContent'

const Container = () => {
    const location = useLocation();
    return (
        <div className="container">
            {location.pathname === '/' && <HomeContent />}
            {location.pathname === '/about' && <AboutContent />}

        </div>
    )
}

export default Container