
import '../Banner/Banner.scss'

const Banner = ({ text, imageUrl }) => {
  return (
    <div className="banner">
      <img className='banner__img' src={imageUrl} alt="Banner" />
      <div className="banner-content">
        <p className='banner__text'>{text}</p>
      </div>
    </div>
  );
};

export default Banner;
