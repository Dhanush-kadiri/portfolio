import React from "react";
import { FaWhatsapp, FaEnvelope} from "react-icons/fa";
import Tilt from 'react-parallax-tilt'

const Contact = () => {
  

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/8639141082";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:kadiridhanush143@gmail.com";
  };

  return (
    <div className="contact-container" style={{fontSize:40}}>
      <h2>Get In Touch</h2>
      <div className="contact-options"  >
        <Tilt>
        <button className="contact-option" onClick={handleWhatsAppClick} style={{height:100,width:250, marginLeft:100 , borderRadius:50}}>
          <FaWhatsapp className="icon" style={{height:50,width:50}} />
          Contact via WhatsApp
        </button></Tilt>
        <div className="or" style={{fontSize:25, alignItems:'center', marginTop:25,marginLeft:200}}> <b>OR</b></div>
        <Tilt>
        <button className="contact-option" onClick={handleEmailClick} style={{height:100,width:250, marginLeft:100 , borderRadius:50}}>
          <FaEnvelope className="icon" style={{height:50,width:50}} />
          Contact via Email
        </button></Tilt>
      </div>

     
    </div>
  );
};

export default Contact;
