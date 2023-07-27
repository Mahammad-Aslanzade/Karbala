import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Slider from './components/Slider';
import HeroSection from './components/HeroSection';
import LiveStream from './components/LiveStream';
import { BrowserRouter } from 'react-router-dom';
import Karbala from './components/Karbala';

const App = () => {
  return (
   
<BrowserRouter>
<Nav/>
    <Karbala/>
    {/* <Slider/>
    <HeroSection /> */}
    <Footer/>
</BrowserRouter>

  )
}

export default App