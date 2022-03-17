import React from 'react';
import Footer from './components/footer/footer';
import { Header } from './components/navbar/navbar';
import Brand from './components/section1/brand';
import GridHistory from './components/section1/gridHistory';
import { AddressMap } from './components/section2/map';
import Satisfied from './components/section2/satisfied';
import SpecialOffers from './components/section2/specialOffers/specialOffers';
import Booking from './components/section3/booking';
import Chef from './components/section3/chef';
import Testimonials from './components/section3/testimonials';




function App() {
  return (
    <>
    <section id="home">
    <Header/>
    <Brand/>
    <GridHistory/>
    <Satisfied/>
    </section>

    <section id="Services">
    <SpecialOffers/>
    <Chef/>
    </section>
    
    <section id="Bookings">
    <Booking/>
    </section>

    <section id="Assessments">
    <Testimonials/>
    </section>

    <section id="Map">
    <AddressMap />
    <Footer/>
    </section>

    </>
  );
}

export default App;
