import Banner from '../../../components/Banner/Banner'
import bannerAbout from '../../../assets/images/banner_about.png'
import Collapse from '../../Collapse/Collapse'

import '../AboutContent/AboutContent.scss'

const AboutContent = () => {
    return (
        <div className='about-content'>
            <Banner imageUrl={bannerAbout} />
            <div className="about-texts">
                <Collapse title='Fiabilité'>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes.</p>
                </Collapse>
                <Collapse title='Respect'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion sur notre plateforme.</p>
                </Collapse>
                <Collapse title='Service'>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion sur notre plateforme.</p>
                </Collapse>
                <Collapse title='Sécurité'>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </div>
    )
}

export default AboutContent