import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../Banner/Banner.scss'
import bannerHome from '../../assets/images/banner_home.png'
import bannerAbout from '../../assets/images/banner_about.png'

const Banner = () =>     {
    const location = useLocation()
    const [currentBanner, setCurrentBanner] = useState(null)
  
    useEffect(() => {
      const banners = {
        '/': bannerHome,
        '/about': bannerAbout,
      };
  
      // On définit la bannière actuelle en fonction de l'URL, en utilisant l'objet banners pour mapper les routes aux bannières
      setCurrentBanner(banners[location.pathname] || null);
    }, [location.pathname]);
  
    if (!currentBanner) {
      return null; // Si aucune bannière n'est trouvée, on ne retourne rien
    }
  
    return (
      <div className="banner">
        <div className='banner__img'>
            <img src={currentBanner} alt="Banner" />
        </div>
        {currentBanner === bannerHome && ( // Affiche le texte uniquement si la bannière est bannerHome
        <div className="banner__text">
          Chez vous, partout et ailleurs
        </div>
      )}
      </div>
    );
  }

// const Banner = () => {
//     return (
//         <img className='banner__img' src={bannerAbout} />
//     )
// };

export default Banner;
