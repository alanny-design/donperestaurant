import React from 'react';
import { Header } from '../components/navbar/navbar.jsx';
import Brand from '../components/section1/brand';
import GridHistory from '../components/section1/gridHistory.jsx';
import Satisfied from '../components/section2/satisfied';
import SpecialOffers from '../components/section2/specialOffers/specialOffers';
import Testimonials from '../components/section3/testimonials';
import Chef from '../components/section3/chef';
import Footer from '../components/footer/footer';

function home() {
  return (
    <>
    <Header/>
    <Brand/>
    <GridHistory/>
    <Satisfied/>
    <SpecialOffers/>
    <Chef/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default home