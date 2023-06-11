import React from 'react';
import './alltrails.css';
import trailData from '../../trails.json';
import { TrailItem } from './TrailItem/trailitem';

export const AllTrails = () => {
  return (
    <section id="all-trails">
      <div className="all-trails-container">
        {trailData.map((trail) => {
          return <TrailItem key={trail.id} trail={trail} />;
        })}
      </div>
    </section>
  );
};
