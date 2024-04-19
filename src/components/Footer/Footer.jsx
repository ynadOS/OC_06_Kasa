import '../Footer/Footer.scss'
import logo from '../../assets/images/logo_footer.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="Logo Kasa Footer" className="footer__logo" />
            <div className="right-reserved">
            © 2024 Kasa. All rights reserved
            </div>
        </div>
    )
}

export default Footer