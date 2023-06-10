import React from 'react';
import './alltrails.css';
import { NavLink } from 'react-router-dom';
import data from '../../trails.json';
import { TrailItem } from './TrailItem/trailitem';

export const AllTrails = () => {
  return (
    <section id="all-trails">
      {data.map(({ general, bannerImage, id }) => {
        return <TrailItem title={general.name} url={bannerImage} id={id} />;
      })}
    </section>
  );
};
