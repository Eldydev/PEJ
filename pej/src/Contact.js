import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactPopup from './Components/ContactPopup';
import logo_insta_black from './IMG/logo_insta_black.png'
import logo_vimeo_black from './IMG/logo_vimeo_black.png'

import "./Contact.css"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d1j7u9w', 'template_poicbk5', form.current, 'user_gvqTgb9mSpJQNV6R0KmMP')
      .then((result) => {
        console.log(result.text);
        if (result.text === "OK") {
          var ok = document.getElementById("Popup")
          ok.style.display ="block"
        }
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Header />
      <form ref={form} onSubmit={sendEmail} class="form">
      <div className="formdiv">
        <div className="formbox">
          <div className="ownerdiv">
            <div>
              <p className="infobox">P.E. JOUBERT</p>
              <p className="infobox">pejoubert@gmail.com</p>
            </div>
            <div>
              <a
                href="https://www.instagram.com/p.e.joubert/" >
                <img className='logo' src={logo_insta_black} />
              </a>
              <a
                href="https://vimeo.com/pejoubert" >
                <img className='logo' src={logo_vimeo_black} />
              </a>
            </div>
          </div>
          <div className="inputdiv">
            <div>
              <input className="input" type="text" name="from_name" placeholder="Votre nom" />
              <input className="input" type="email" name="from_email" placeholder="Votre mail" />
              <input className="input" type="email" name="from_email" placeholder="Objet" />
            </div>
            <div>
              <textarea name="message" placeholder="Votre Message" />
              <input class="button" type="submit" value="Send" 
              style={{
                width: "60px",
                marginLeft: "70%",
                marginTop: "20px",
            }}/>
            </div>
          </div>
        </div>
      </div>
      </form>
      <ContactPopup />
    </div>
  );
};

export default Contact
