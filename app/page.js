 
import Banner from './(conponents)/Banner';
import ServicesComponent from './pages/services/page.jsx'
import AboutComponent from './pages/about/page'
import DigainComponent from './pages/digain/page'
import PortfolioComponent from './pages/portfolio/page'
import ContactComponent from './pages/contact/page'
export default function Home() {
  return (
    <>
      <Banner />
      <ServicesComponent /> 
      <AboutComponent />
      <DigainComponent />
      <PortfolioComponent />
      <ContactComponent /> 
    </>
  );
}
