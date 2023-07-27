import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav';
import Home from '../pages/Home';
import AhlalBayt from '../pages/AhlalBayt';
import Karbala from '../pages/Karbala';
import Ashura from '../pages/Ashura';
import ImamHussein from '../pages/ImamHussein';
import LiveStream from "../components/LiveStream"
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/imamhussein' element={<ImamHussein/>} />
                <Route path='/ahlalbayt' element={<AhlalBayt />} />
                <Route path='/karbala' element={<Karbala />} />
                <Route path='/ashura' element={<Ashura/>} />
                <Route path='/liveStream' element={<LiveStream/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;