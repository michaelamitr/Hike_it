import React from 'react';
import './alltrails.css';
import { NavLink } from 'react-router-dom';

export const AllTrails = () => {
  return (
    <section id="all-trails">
      <div className="trail">
        <NavLink to="/trail">
          <h1 className="trail__title">Rybářská stezka</h1>
        </NavLink>
      </div>
      <div className="trail__map">tady bude mapa</div>
    </section>
  );
};
