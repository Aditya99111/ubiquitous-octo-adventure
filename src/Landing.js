import React from 'react'
import { Home, About,  Contact, Footer } from "./Components"
import AddHot from './Components/Hot/AddHot';
import Addarrivals from './Components/Arrivals/Addarrivals';
const Landing = () => {
    return (
        <div>
            <Home />
            <AddHot/>
            <About />
            <Addarrivals />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing
