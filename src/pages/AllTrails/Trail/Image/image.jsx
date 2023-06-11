import React from 'react';
import './image.css';

export const Image = ({ image, active, dialogRef }) => {
  const handleOpen = (e) => {
    active(image);
    dialogRef.current.showModal();
    e.preventDefault();
  };

  return (
    <>
      <img onClick={handleOpen} className="gallery__img" src={image} alt="" />
    </>
  );
};
