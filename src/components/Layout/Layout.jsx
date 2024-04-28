import '../Layout/Layout.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Container from '../Container/Container'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Container />
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
