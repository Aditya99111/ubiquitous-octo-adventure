import React from 'react'
import { Header, Home, About, Arrivals, Contact, Footer } from "./Components"
import AddHot from './Components/Hot/AddHot';
import Addarrivals from './Components/Arrivals/Addarrivals';
const Landing = () => {
    return (
        <div>
            <Header />
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
