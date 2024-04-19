import React, { useState } from "react";
import '../Slideshow/Slideshow.scss';
import ChevronLeft from '../../assets/images/chevron_left.png';
import ChevronRight from '../../assets/images/chevron_right.png';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img className='slideshow__image' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className='slideshow__button slideshow__button--prev' onClick={goToPrevSlide}>
        <img src={ChevronLeft} alt="Previous" />
      </button>
      <button className='slideshow__button slideshow__button--next' onClick={goToNextSlide}>
        <img src={ChevronRight} alt="Next" />
      </button>
      <span className='slideshow__counter'>{`${currentIndex + 1}/${images.length}`}</span>
    </div>
  );
};

export default Slideshow;
