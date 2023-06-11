import React from 'react';
import './image.css';

export const Image = ({ image }) => {
  return <img className="gallery__img" src={image} alt="" />;
};
