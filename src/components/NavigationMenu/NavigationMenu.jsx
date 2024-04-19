import { NavLink } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">À Propos</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
