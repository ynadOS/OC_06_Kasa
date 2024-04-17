import '../Container/Container.scss'
import { useLocation } from 'react-router-dom';


import HomeContent from './HomeContent/HomeContent'

const Container = () => {
    const location = useLocation();

    return (
        <div className="container">
            {location.pathname === '/' && <HomeContent />}
        </div>
    )
}

export default Container