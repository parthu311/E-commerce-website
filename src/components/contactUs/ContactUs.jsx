import React from 'react'
import Navbar from '../navbar/NavBar'
import Footer from '../footer/Footer'

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className="container bg-gray-200 p-4 rounded-lg shadow-md">
  <h1>Contact Us !</h1>
  <h2 style={{ textAlign: "center" }}>
    Welcome to <span id="W_Name"> E-Bharat</span>!
  </h2>
  <p style={{ fontSize: 17 }}>
    Please email us if you have any queries about the site, advertising, or
    anything else.
  </p>
  <div style={{ textAlign: "center" }}>
    <img
      alt="contact-us"
      height={87}
      src="https://lh3.googleusercontent.com/-BA7qy8h_v1g/YLVCWDNZdCI/AAAAAAAAALw/rsHNJWX0BK4P5CuB0ymG8QkJ9A9E8KchgCLcBGAsYHQ/w320-h87/email-us-1805514__480.webp"
      width={320}
    />
    <p style={{ marginLeft: "25%" }}>
      <i
        className="fas fa-envelope-open-text"
        style={{ color: "#2c3e50", fontSize: 20 }}
      />{" "}
      <b>
        <i>
          {" "}
          <span id="W_Email">
            <a href="mailto:parthradadiya433@gmail.com">
              parthradadiya433@gmail.com
            </a>
          </span>
        </i>
      </b>
      <br />
      <i
        className="fab fa-whatsapp-square"
        style={{ color: "#3edc81", fontSize: 20 }}
      />{" "}
      <b>
        <span id="W_whatsapp">
          <a href="tel:" />
        </span>
      </b>
      <br />
    </p>
    <h3 style={{ color: "#3e005d" }}>
      We will revert you as soon as possible...!
    </h3>
    <p style={{ color: "#3e005d", textAlign: "center" }}>
      Thank you for contacting us! <br />
      <b>Have a great day</b>
    </p>
    <span style={{ fontSize: 1, opacity: 0 }}>
      This page is generated with the help of{" "}
      <a
        href="https://www.blogearns.com/2021/06/free-contact-us-page-generator.html"
        style={{ color: "inherit" }}
      >
        Contact Us Page Generator
      </a>
    </span>
  </div>
  </div>
  <Footer/>
</>

  )
}

export default ContactUs