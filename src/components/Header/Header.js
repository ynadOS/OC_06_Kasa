import '../Header/Header.scss'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"

import NavigationMenu from '../NavigationMenu/NavigationMenu'

const Header = () => {
    return (
        <div className="header">
            <div className='header__menu'>
                <div className='header__logo'>
                    <Link to="/">
                        <img src={logo} alt="Logo Kasa" />
                    </Link>
                </div>
                <div className="header__navigation">
                    <NavigationMenu />
                </div>
            </div>
        </div>
    );
};

export default Header