// AccommodationCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../AccommodationCard/AccommodationCard.scss';
import data from '../../data/logements.json'

const AccommodationCard = ({ accommodation }) => {
  const { id, title, cover } = accommodation;

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

export default AccommodationCard;
