import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCheck } from "react-icons/fa";
import Tilt from 'react-parallax-tilt'

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the email
    console.log("Form submitted!");
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/8639141082";
  };

  const handleEmailClick = () => {
    setShowForm(true);
  };

  return (
    <div className="contact-container" style={{fontSize:40}}>
      <h2>Get In Touch</h2>
      <div className="contact-options"  >
        <Tilt>
        <button className="contact-option" onClick={handleWhatsAppClick} style={{height:'15%',width:'60%',  borderRadius:50}}>
          <FaWhatsapp className="icon" style={{height:'25%',width:'25%'}} />
          Contact via WhatsApp
        </button>
        ></Tilt>
        <div className="or" style={{fontSize:'auto', alignItems:'center', marginTop:'10%',marginLeft:'35%'}}> <b>OR</b></div>
         
        <Tilt>
        <button className="contact-option" onClick={handleEmailClick} style={{height:'15%',width:'60%', marginLeft:'15%' , borderRadius:50}}>
          <FaEnvelope className="icon" style={{height:'25%',width:'25%'}} />
          Contact via Email
        </button>
       
        </Tilt>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit <FaCheck />
          </button>
        </form>
      )}

      {submitted && (
        <p className="submitted-message">Form has been submitted!</p>
      )}
    </div>
  );
};

export default Contact;
