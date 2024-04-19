import '../Container/Container.scss'
import { useLocation } from 'react-router-dom';
import HomeContent from './HomeContent/HomeContent'
import AboutContent from './AboutContent/AboutContent'
import AccommodationDetails from './AccommodationDetails/AccommodationDetails';
import NotFoundContent from './NotFoundContent/NotFoundContent'
import { useParams } from 'react-router-dom';


const Container = () => {
    const location = useLocation();
    const { id } = useParams();
    return (
        <div className="container">
            {location.pathname === '/' && <HomeContent />}
            {location.pathname === '/about' && <AboutContent />}
            {/* {location.pathname === '/accommodation/${id}' && <AccommodationDetails />} */}
            {/* {!['/', '/about'].includes(location.pathname) && <NotFoundContent />} */}
        </div>
    )
}

export default Container