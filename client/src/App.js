import React from 'react';
import Header from './Header';
import Courses from './Courses';
import Slider from './Slider';
import Instructors from './Instructors';
import Contact from './Contact';
import Footer from './Footer';
import Map from './Map';

const App = () => {
    return (
        <>
          <Header />
          <Courses />
          <Slider />
          <Instructors />
          <Map />
          <Contact />
          <Footer />
        </>
    )
};

export default App;
