import '../AccomodationCard/AccomodationCard.scss'

const AccommodationCard = ({ accommodation }) => {
  const { title, cover, description, host, rating, location, equipments, tags } = accommodation;

  return (
    <div className='cards'>
        <div className="card__cover">
            <img className='card__cover--img' src={cover} alt={title} />
            <div className="card__title">{title}</div>
            {/* <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Hosted by {host.name}</small></p>
            <p className="card-text">Rating: {rating}</p>
            <p className="card-text">Location: {location}</p>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Equipments:</strong> {equipments.join(', ')}</li>
            <li className="list-group-item"><strong>Tags:</strong> {tags.join(', ')}</li>
            </ul> */}
        </div>
    </div>
  );
};

export default AccommodationCard;
