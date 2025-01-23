import Banner from '@/app/(conponents)/Banner';
import ServicesComponent from '../services/page';
import AboutComponent from '../about/page';
import DigainComponent from '../digain/page';
import PortfolioComponent from '../../pages/portfolio/page';
import ContactComponent from '../../pages/contact/page';

const page = () => {
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
};

export default page;