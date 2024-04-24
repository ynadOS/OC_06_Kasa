import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import '../Accommodation/Accommodation.scss'
import NotFound from '../NotFound/NotFound'
import Slideshow from '../../components/Slideshow/Slideshow';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  if (!accommodation) {
    return <div>
      <NotFound />
    </div>;
  }

  const hostNames = accommodation.host.name.split(' ');
  const firstName = hostNames[0];
  const lastName = hostNames[1];

  return (
    <div className='container'>
      <div className="accommodation">
        <div className="slideshow">
          <Slideshow images={accommodation.pictures} />
        </div>
        <div className="accommodation-and-host">
          {/* Flat infos text */}
          <div className="accommodation-global-infos">
            <h2 className='accommodation__title'>{accommodation.title}</h2>
            <p className='accommodation__location'>{accommodation.location}</p>
            <div className='accommodation__tags'>
              {/* Mapping over tags and applying styles */}
              {accommodation.tags.map((tag, index) => (
                <p key={index} className={`tag-${index}`}>
                  {tag}
                </p>
              ))}
            </div>
          </div>

          {/* Host & rating div */}
          <div className="host-and-rating">
            <div className="host">
              <p className='host__name'>{firstName}<br />{lastName}</p>
              <img className='host__picture' src={accommodation.host.picture} alt="" />
            </div>
            <div className="rating">
              <Rating rating={accommodation.rating} />
            </div>
          </div>
        </div>
        <div className="description-and-equipment">
          {/* Collapse component for Description */}
          <Collapse title="Description">
            <p className='collapse-content'>{accommodation.description}</p>
          </Collapse>
          {/* Collapse component for Equipment */}
          <Collapse title="Équipements">
            <p className="collapse-content">
            <ul>
              {accommodation.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
