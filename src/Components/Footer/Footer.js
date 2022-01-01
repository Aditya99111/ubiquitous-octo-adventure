import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
const Footer = () => {
    return (
       
<section className="footer" id="footer">
    <div className="box-container">
        <div className="box">
            <h3>Our branches</h3>
            <Link href="#"><i className="fas fa-map-marker-alt"></i> india</Link>
            <Link href="#"><i className="fas fa-map-marker-alt"></i> usa</Link>
            <Link href="#"><i className="fas fa-map-marker-alt"></i> africa</Link>
            <Link href="#"><i className="fas fa-map-marker-alt"></i> russia</Link>
            <Link href="#"><i className="fas fa-map-marker-alt"></i> canada</Link>
        </div>

        <div className="box">
            <h3>quick links </h3>
            <Link href="#home"><i className="fas fa-arrow-right"></i> Home</Link>
            <Link href="#about"><i className="fas fa-arrow-right"></i> about</Link>
            <Link to="/products"><i className="fas fa-arrow-right"></i> Products</Link>
            <Link href="#arrivals"><i className="fas fa-arrow-right"></i> arrivals</Link>
            <Link href="#contact"><i className="fas fa-arrow-right"></i> contact</Link>
        </div>

        <div className="box">
            <h3>contact us</h3>
            <Link href="#"><i className="fas fa-phone"></i> +123-456-789</Link>
            <Link href="#"><i className="fas fa-phone"></i> +111-222-333</Link>
            <Link href="#"><i className="fas fa-envelope"></i>youremail@gmail.com</Link>
            <Link href="#"><i className="fas fa-map-marker-alt"></i>Usa, california</Link>
        </div>

        <div className="box">
            <h3>contact us</h3>
            <Link href="#"><i className="fab fa-facebook-f"></i> facebook</Link>
            <Link href="#"><i className="fab fa-twitter"></i> twitter</Link>
            <Link href="#"><i className="fab fa-instagram"></i> instagram</Link>
            <Link href="#"><i className="fab fa-pinterest"></i> pinterest</Link>
        </div>
    </div>

    <div className="credit"> &copy; all rights reseved <span>by Lorem.inc</span> @2021</div>
</section>
    )
}

export default Footer
