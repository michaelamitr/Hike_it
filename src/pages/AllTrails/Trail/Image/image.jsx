import React from 'react';
import './image.css';
import { useRef } from 'react';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import { useState } from 'react';

export const Image = ({ image }) => {
  const [img, setImg] = useState(0);
  const dialogRef = useRef();
  const handleOpen = (e) => {
    dialogRef.current.showModal();
    e.preventDefault();
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <img onClick={handleOpen} className="gallery__img" src={image} alt="" />
      <dialog className="gallery__dialog" ref={dialogRef} onClick={handleClose}>
        <div className="dialog__content">
          <img className="arrow arrow--left" src={arrowLeft} alt="" />
          <img
            className="dialog__img"
            src={image}
            alt=""
            onClick={handleClose}
          />
          <img className="arrow arrow--right" src={arrowRight} alt="" />
        </div>
      </dialog>
    </>
  );
};
