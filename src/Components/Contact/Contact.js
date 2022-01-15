import React, { useState } from "react";
import "./contact.css"
const Contact = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        contact <span>us</span>
      </h1>

      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Success! Thanks for your feedback.");
            fetch("https://sheetdb.io/api/v1/qx3sq2xft7lmo", {
              method: "post",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            })
              .then((res) => res.json())
              .then((res) => console.log(res));
          }}
          method="POST"
          id="form"
        >
          <h3 data-aos="zoom-in">{props.subheading}</h3>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="box"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="box"
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="box"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="box"
            onChange={handleChange}
            cols="30"
            rows="10"
            required
          ></textarea>
          <input
            data-aos="zoom-in"
            type="submit"
            value="send message"
            className="box btn"
            onChange={handleChange}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;