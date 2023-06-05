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
        <section className="general">
          <div className="heading">
            <h1 className="heading__text">Obecné info</h1>
          </div>
          <div className="general__info">
            <p>Lokalita:</p>
            <p>Délka:</p>
            <p>Počet etap:</p>
            <p>Typ:</p>
            <p>Obtížnost:</p>
            <p>Vhodné absolvovat:</p>
          </div>
        </section>
      </div>
    </section>
  );
};
