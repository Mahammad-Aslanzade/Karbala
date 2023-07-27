import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Slider from './components/Slider';
import HeroSection from './components/HeroSection';
import { useState } from 'react';
import { useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
const App = () => {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
      setLoading(false)
     },2500)
  },[])
  return (
   
<>
 {
  loading ?
 <div className="loader">
   <SyncLoader
  color={"red"}
  loading={loading}
  size={20}
/>
 </div>
  :

<>
<Nav/>
  <Slider/>
  <HeroSection />
  <Footer/>
</>
 }
</>

  )
}

export default App