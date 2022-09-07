import React from "react";
import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Newsletter from "./component/Newsletter";
import Branche from "./component/Branche";
import PricingContent from "./component/PricingContent";
import Single from "./assets/single.png";
import Double from './assets/double.png';
import Triple from './assets/triple.png';
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

function App() {
  return (
    <div className="element">
      <Navbar />    
      <Hero /> 
      <Analytics />
      <Newsletter />
      <PricingContent  />
      <div className='w-full pt-0 pb-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 " data-aos="fade-up" 
             data-aos-duration="1000"
             data-aos-easing="ease-in-out">
          <Cards img={Single} title="Single User"   price="$149" storage="500 GB Storage" upTo="Send up to 2GB"  user="1 User Allowed" />
          <Cards img={Double} title="Partnership"   price="$199" storage="1 TB Storage"   upTo="Send up to 10GB" user="3 User Allowed" active="card"/>
          <Cards img={Triple} title="Group Account" price="$299" storage="5 TB Storage"   upTo="Send up to 20GB" user="10 User Allowed"/>
        </div>
      </div>
      <Branche />
      <Footer />
    </div>
  );
}

export default App;
