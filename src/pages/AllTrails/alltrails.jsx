import React from 'react';
import './alltrails.css';
import { NavLink } from 'react-router-dom';

export const AllTrails = () => {
  return (
    <section id="all-trails">
      <div className="trail-fish">
        <NavLink to="/fishermans-trail">
          <h1 className="trail__title">Rybářská stezka</h1>
        </NavLink>
      </div>
      <div className="trail__map">tady bude mapa</div>
      <div className="trail-gr221">
        <NavLink to="/gr221">
          <h1 className="trail__title">GR221</h1>
        </NavLink>
      </div>
      <div className="trail__map">tady bude mapa</div>
    </section>
  );
};
