import React from 'react';
import './image.css';
import { useRef } from 'react';

export const Image = ({ image }) => {
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
        <img className="dialog__img" src={image} alt="" onClick={handleClose} />
      </dialog>
    </>
  );
};
