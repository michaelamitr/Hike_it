import React from 'react';
import './contact.css';
import ivaImage from './img/iva.jpg';
import misaImage from './img/misa.jpg';

export const Contacts = () => {
  return (
    <section id="contacts">
      <div className="person-container">
        <div className="person-text">
          <h2 className="person-name">Michaela Trčková</h2>
          <p className="person-describtion">
            Ahoj! Já jsem Míša. Miluju svobodu, dobrodružství a poznávání
            nového. A oceán. Ráda cestuji, pohybuji se v přírodě, poznávám nové
            kultury a pronikám hlouběji do světa IT. Život je jízda!
          </p>
          <div className="person-contact">
            <div className="email">
              <span className="email-icon"></span>
              <a href="mailto:misa.trckova.mt@gmail.com" className="email-link">
                misa.trckova.mt@gmail.com
              </a>
            </div>
            <div className="github">
              <span className="github-icon"></span>
              <a href="https://github.com/michaelamitr" className="github-link">
                michaelamitr
              </a>
            </div>
          </div>
        </div>
        <img
          className="person-image"
          src={misaImage}
          alt="Michaela Trčková"
        ></img>
      </div>
      <div className="person-container">
        <div className="person-text">
          <h2 className="person-name">Iva Havranová</h2>
          <p className="person-describtion">XXX</p>
          <div className="person-contact">
            <div className="email">
              <span className="email-icon"></span>
              <a href="mailto:havranova.i@seznam.cz" className="email-link">
                havranova.i@seznam.cz
              </a>
            </div>
            <div className="github">
              <span className="github-icon"></span>
              <a href="https://github.com/havraiv" className="github-link">
                havraiv
              </a>
            </div>
          </div>
        </div>
        <img className="person-image" src={ivaImage} alt="Iva Havranová"></img>
      </div>
    </section>
  );
};
