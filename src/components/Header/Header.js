import '../Header/Header.scss'
import logo from "../../assets/images/logo.png"
import NavigationMenu from '../NavigationMenu/NavigationMenu'

const Header = () => {
    return (
        <div className="header">
          <div className='header__logo'>
              <img src={logo} alt="Logo Kasa" />
          </div>
          <div className="header__navigation">
            <NavigationMenu />
          </div>
        </div>
    )
}

export default Header