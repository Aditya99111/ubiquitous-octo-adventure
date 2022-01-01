import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
const Home = () => {
    return (
        
<section className="home" id="home">

    <div className="home-slider swiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide box bg1" >
                <div className="content">
                    <h3>happy Halloween</h3>
                    <p>specail discount</p>
                    <Link className="btn" to="/products">shop Now</Link>
                </div>

            </div>
        </div>

    </div>


</section>
    )
}

export default Home
