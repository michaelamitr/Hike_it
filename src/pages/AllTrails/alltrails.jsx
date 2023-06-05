import React from 'react';
import './alltrails.css';
import { NavLink } from 'react-router-dom';

export const AllTrails = () => {
  return (
    <section id="all-trails">
      <div className="fish">
        <NavLink to="/fishermans-trail">
          <h1 className="fish__title">Rybářská stezka</h1>
        </NavLink>
      </div>
      <div className="fish__map">tady bude mapa</div>
      <div className="gr">
        <NavLink to="/gr221">
          <h1 className="gr__title">GR221</h1>
        </NavLink>
      </div>
      <div className="gr__map">tady bude mapa</div>
    </section>
  );
};
