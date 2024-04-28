import '../Rating/Rating.scss'
import ActiveStar from '../../assets/images/star_active.png'
import InactiveStar from '../../assets/images/star_inactive.png'

const Rating = ({ rating }) => {
    const renderStar = (index) => {
        if (index < rating) {
            return <img key={index} src={ActiveStar} alt="active star" className="star" />
        } else {
            return <img key={index} src={InactiveStar} alt="inactive star" className="star" />
        }
    }

    const stars = Array.from({ length: 5 }, (_, index) => renderStar(index))

    return <div>{stars}</div>
}

export default Rating

// ★★★ FAIRE DES ETOILES UN CARACTERE POUR AFFECTER LA COULEUR QUE L'ON SOUHAITE ★★★ //
// import '../Rating/Rating.scss'

// const Rating = ({ rating }) => {
//     const renderStar = (index) => {
//         const isActive = index < rating
//         const starColor = isActive ? 'active' : 'inactive'
//         return <span key={index} className={`star ${starColor}`}>★</span>
//     }

//     const stars = Array.from({ length: 5 }, (_, index) => renderStar(index))

//     return <div>{stars}</div>;
// }

// export default Rating

