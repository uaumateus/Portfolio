import React from 'react';
import './styles.css';
import avatar from './assets/profile.png';

function Contact() {
  
  return (
    <div className="slide contact" id="contact">
      <img src={avatar} className="imgContact"></img>
      <h1 className="titleContact">Ficou interessado?</h1>
      <h1 className="subtitleContact">Entre em contato comigo :)</h1>
      <div className="methods">
        <a href="https://github.com/uaumateus" title="github.com/uaumateus" target="_blank" className="methodContact">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/uaumateus/" className="methodContact" title="linkedin.com/in/uaumateus" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:mateus.pereira99@hotmail.com?Subject=Olá Mateus!" target="_blank" title="mateus.pereira99@hotmail.com" className="methodContact">
          <i class="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
