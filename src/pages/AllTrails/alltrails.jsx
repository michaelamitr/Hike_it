import React from 'react';
import './alltrails.css';
import { NavLink } from 'react-router-dom';
import data from '../../trails.json';
import { TrailItem } from './TrailItem/trailitem';

export const AllTrails = () => {
  return (
    <section id="all-trails">
      {data.map((trails) => {
        return (
          <TrailItem title={trails.general.name} url={trails['banner-image']} />
        );
      })}
    </section>
  );
};
