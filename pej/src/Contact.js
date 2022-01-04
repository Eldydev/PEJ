import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Logo from './Components/Logo';
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
          ok.style.display = "block"
        }
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Header />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Logo />
        <form ref={form} onSubmit={sendEmail} class="forma">
          <div className="formdiv">
            <div className="formbox">
              <p id="contactcatch">DROP ME A LINE</p>
              <div className="inputdiv">
                <div className='inputbox'>
                  <input className="input" type="text" name="from_name" placeholder="Votre nom" />
                  <input className="input" type="email" name="from_email" placeholder="Votre mail" />
                  <input className="input" type="text" name="object" placeholder="Objet" />
                </div>
                <div className='textbox'>
                  <textarea name="message" placeholder="Votre Message" />
                  <input class="button" id="ContactButton" type="submit" value="Send"
                    style={{
                      width: "60px",
                      marginTop: "20px",
                    }} />
                </div>
                <div className="logobox">
                  <a
                    href="https://www.instagram.com/p.e.joubert/" >
                    <img className='Conlogo' src={logo_insta_black} />
                  </a>
                  <a
                    href="https://vimeo.com/pejoubert" >
                    <img className='Conlogo' src={logo_vimeo_black} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <ContactPopup />
    </div>
  );
};

export default Contact
