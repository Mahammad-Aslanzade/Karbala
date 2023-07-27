import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav';
import Home from '../pages/Home';
import AhlalBayt from '../pages/AhlalBayt';
import Karbala from '../pages/Karbala';
import Ashura from '../pages/Ashura';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ahlalbayt' element={<AhlalBayt />} />
                <Route path='/karbala' element={<Karbala />} />
                <Route path='/ashura' element={<Ashura/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;