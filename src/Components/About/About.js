import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
const About = () => {
    return (
        
<section className="about" id="about">
    <div className="content">
        <h1>about us  </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo, ea in, cupiditate soluta voluptatem iste veniam dolores minima, voluptate sint. Dicta, esse dolore nobis blanditiis totam consectetur omnis temporibus.</p>
        <Link to="/about" className="btn"> read more </Link>
    </div>
</section>
    )
}

export default About
