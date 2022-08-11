import React from 'react'
import Hero from "../components/Hero";
import Currency from "../components/Currency";
import OurWork from "../components/OurWork";
import Learn from '../components/Learn';
import Advert from '../components/Advert';

const Homepage = () => {
          return (
                    <div>
                              <Hero />
			<Currency />
                              <Learn />
                              <Advert />
                              <OurWork />
                    </div>
          )
}

export default Homepage