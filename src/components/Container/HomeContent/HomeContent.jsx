import '../HomeContent/HomeContent.scss'
import { Link } from 'react-router-dom';
import AccommodationCard from '../../AccommodationCard/AccommodationCard'
import data from '../../../data/logements.json'
import Banner from '../../Banner/Banner'
import bannerHome from '../../../assets/images/banner_home.png'

const HomeContent = () => {
    return (
        <div className="home-container">
            <Banner text='Chez vous, partout et ailleurs' imageUrl={bannerHome} />
            <div className="cards-container">
                {data.map((accommodation) => (
                    <div className="cards__display" key={accommodation.id}>
                        <Link to={`/accommodation/${accommodation.id}`}>
                            <AccommodationCard accommodation={accommodation} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
)
}

export default HomeContent;
