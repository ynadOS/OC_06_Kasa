import { NavLink } from 'react-router-dom'
import '../NotFoundContent/NotFoundContent.scss'

const NotFoundContent = () => {
    return (
        <div className="notfound">
            <div className="notfound__title">404</div>
            <div className="notfound__text">Oups ! La page que vous demandez n'existe pas.</div>
            <NavLink to='/' className="notfound__return">Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default NotFoundContent