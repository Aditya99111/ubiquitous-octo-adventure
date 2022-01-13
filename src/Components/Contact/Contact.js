import React from 'react'
import "./contact.css"
const Contact = () => {
    return (
        
<section className="contact" id="contact">
    <h1 className="heading"><span>contact</span> us </h1>
<div className="row">

    <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224090.7638442108!2d76.9531790169709!3d28.647194765827848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1632992245613!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
    
    <form action="">
        <h3>contact us for bluk orders!</h3>
        <input name="name" type="text" className="box" placeholder="Your name"/>
        <input name="email" type="email" className="box" placeholder="Your email"/>
        <input name="number" type="number" className="box" placeholder="Your number"/>
        <textarea name="message" placeholder="Your message" className="box" cols="30" rows="10"></textarea>
        <input type="submit" className="btn" value="Submit"/>
    </form>
</div>
</section>

    )
}

export default Contact
