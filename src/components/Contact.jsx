import React from "react";
import "../assets/css/Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-sub">Hubungi saya untuk kolaborasi atau project freelance</p>

      <div className="contact-grid">
        {/* Kiri: Kontak Info */}
        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>Jl Gambir Pasar 8 Gg Karya Rotan 8</p>
            </div>
          </div>
          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Call Me</h4>
              <p>0812-6910-6029</p>
            </div>
          </div>
          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>sukmamelatii1501@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Kanan: Form */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message here..." />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
