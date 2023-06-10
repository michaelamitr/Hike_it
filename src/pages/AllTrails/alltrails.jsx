import React from 'react';
import './alltrails.css';
import { NavLink } from 'react-router-dom';
import data from '../../trails.json';
import { Heading } from './Heading/heading';

export const AllTrails = () => {
  return (
    <section id="all-trails">
      <div className="trail">
        <NavLink to="/trail">
          <h1 className="trail__title">Rybářská stezka</h1>
        </NavLink>
        <Heading url={data[0]['banner-image']} title={data[0].general.name} />
      </div>
      <div className="trail__map">tady bude mapa</div>
    </section>
  );
};
