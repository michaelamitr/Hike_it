import React from 'react';
import './stage.css';

export const Stage = ({ number, name, distance, duration, description }) => {
  return (
    <div className="container">
      <h1>
        {number}. etapa: {name}
      </h1>
      <p>Vzdálenost: {distance}</p>
      <p>Trvání: {duration}</p>
      <p>{description}</p>
    </div>
  );
};
