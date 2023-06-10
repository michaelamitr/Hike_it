import React from 'react';
import './heading.css';

export const Heading = ({ title, url }) => {
  return (
    <div
      className="heading__container"
      style={{ backgroundImage: `url${url}` }}
    >
      <h2 className="heading__title">{title}</h2>
    </div>
  );
};
