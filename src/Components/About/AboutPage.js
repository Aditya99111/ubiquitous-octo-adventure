import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import "./about.css"
const AboutPage = () => {
    return (
               
<section className="aboutpage" id="about">
        <h1 className="heading">about <span>us</span></h1>
    <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis sed dignissimos et quae molestias sit illum minus unde sunt doloribus tempora, ex odio maiores minima eligendi quisquam aperiam inventore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum non error saepe architecto laboriosam voluptate, illum optio rem, excepturi unde explicabo omnis voluptatum nam velit esse itaque pariatur molestiae placeat.</p>
        <Link to="/#contact" className="btn">Contact Us</Link>
    </div>
</section>
    )
}

export default AboutPage
