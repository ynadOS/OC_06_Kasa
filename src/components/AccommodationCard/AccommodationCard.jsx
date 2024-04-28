import '../AccommodationCard/AccommodationCard.scss'

const AccommodationCard = ({ accommodation }) => {
  const { title, cover } = accommodation

  return (
    <div className='cards'>
      <div className="card__link">
        <div className="card__cover">
          <img className='card__cover--img' src={cover} alt={title} />
          <div className="card__title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard
