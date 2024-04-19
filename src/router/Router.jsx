import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Accommodation from '../pages/Accommodation/Accommodation'
import NotFound from '../pages/NotFound/NotFound'
import AccommodationCard from '../components/AccommodationCard/AccommodationCard'
import AccommodationDetails from '../components/Container/AccommodationDetails/AccommodationDetails'

const AppRouter = () => {
    return (
      <Router basename='/OC_P6_Kasa'>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/accommodation/:id" element={<Accommodation />} />
          </Routes>
        </Layout>
    </Router>
  
    );
  }

  export default AppRouter