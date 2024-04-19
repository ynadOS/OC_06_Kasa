import '../Header/Header.scss'
import logo from "../../assets/images/logo.png"
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import Banner from '../Banner/Banner'

const Header = () => {
    return (
        <div className="header">
          <div className='header__menu'>
            <div className='header__logo'>
                <img src={logo} alt="Logo Kasa" />
            </div>
            <div className="header__navigation">
              <NavigationMenu />
            </div>
          </div>
            <Banner />
        </div>
    )
}

export default Header