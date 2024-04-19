import '../HomeContent/HomeContent.scss'
import { Link } from 'react-router-dom';
import AccommodationCard from '../../AccommodationCard/AccommodationCard'
import data from '../../../data/logements.json'

const HomeContent = () => {
    return (
        <div className="cards-container">
            {data.map((accommodation) => (
                <div className="cards__display" key={accommodation.id}>
                    <Link to={`/accommodation/${accommodation.id}`}>
                        <AccommodationCard accommodation={accommodation} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default HomeContent;
