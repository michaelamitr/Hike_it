import React from 'react';
import './stage.css';

export const Stage = ({ number, name, distance, duration, description }) => {
  return (
    <div className="stage">
      {name && number ? (
        <div className="stage__flex">
          <h1 className="stage__title">
            {number}. etapa: {name}
          </h1>
        </div>
      ) : null}
      {distance ? <p>Vzdálenost: {distance} km</p> : null}
      {duration ? <p>Trvání: {duration} h</p> : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
};
