import React from 'react';
import './stage.css';
import cross from './img/cross.png'; //nefunguje mi

export const Stage = ({ number, name, distance, duration, description }) => {
  return (
    <div className="stage">
      <div className="stage__flex">
        <h1 className="stage__title">
          {number}. etapa: {name}
        </h1>
        <div className="stage__cross">{cross}</div>
      </div>
      <p>Vzdálenost: {distance}</p>
      <p>Trvání: {duration}</p>
      <p>{description}</p>
    </div>
  );
};
