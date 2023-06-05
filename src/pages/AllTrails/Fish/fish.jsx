import React from 'react';
import './fish.css';

export const Fish = () => {
  return (
    <section id="fish__trail">
      <div className="fish__page">
        <div className="fish__banner">
          <div className="title">
            <h1 className="title__heading">Rybářská stezka</h1>
          </div>
        </div>
        <nav className="navigation">
          <a href="#">Obecné info</a>
          <a href="#">Etapy</a>
          <a href="#">Co s sebou</a>
          <a href="#">Galerie</a>
        </nav>
      </div>
    </section>
  );
};
