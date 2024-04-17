import '../HomeContent/HomeContent.scss'
import AccommodationCard from '../../../components/AccomodationCard/AccomodationCard'
import data from '../../../data/logements.json'

const HomeContent = () => {
    return (
        <div className="cards-container">
            {data.map((accommodation) => (
            <div className="cards__display" key={accommodation.id}>
                <AccommodationCard accommodation={accommodation} />
            </div>
            ))}
        </div>
    )
}

export default HomeContent