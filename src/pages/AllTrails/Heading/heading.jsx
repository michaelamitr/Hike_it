import React from 'react';
import './heading.css';

export const Heading = ({ title }) => {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
    </div>
  );
};
