import Banner from '@/app/(conponents)/Banner';
import ContactComponent from '../portfolio/page'; 
import AboutComponent from '../services/page'; 

const page = () => {
  return (
    <div >
      <Banner />
      <AboutComponent />
      <ContactComponent />
    </div>
  );
};

export default page;