import '../Rating/Rating.scss'
import ActiveStar from '../../assets/images/star_active.png';
import InactiveStar from '../../assets/images/star_inactive.png';

const Rating = ({ rating }) => {
    const renderStar = (index) => {
        if (index < rating) {
            return <img key={index} src={ActiveStar} alt="active star" className="star" />;
        } else {
            return <img key={index} src={InactiveStar} alt="inactive star" className="star" />;
        }
    };

    // Crée un tableau de 5 éléments pour les 5 étoiles
    const stars = Array.from({ length: 5 }, (_, index) => renderStar(index));

    return <div>{stars}</div>;
};

export default Rating;
