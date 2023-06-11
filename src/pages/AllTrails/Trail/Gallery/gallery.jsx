import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';
import { Image } from '../Image/image';
import arrowLeft from '../img/arrow-left.png';
import arrowRight from '../img/arrow-right.png';
import { Heading } from '../../Heading/heading';

export const Gallery = ({ trailData }) => {
  const dialogRef = useRef();
  const [dialogImage, setDialogImage] = useState('');
  const setDialogImageIndex = (index) => {
    let newIndex;
    if (index >= trailData.gallery.length) {
      newIndex = 0;
    } else if (index < 0) {
      newIndex = trailData.gallery.length - 1;
    } else {
      newIndex = index;
    }
    setDialogImage(trailData.gallery[newIndex]);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        setDialogImageIndex(trailData.gallery.indexOf(dialogImage) - 1);
      } else if (event.keyCode === 39) {
        // Right arrow key
        setDialogImageIndex(trailData.gallery.indexOf(dialogImage) + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dialogImage]);

  const handleActive = (image) => {
    setDialogImage(image);
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      dialogRef.current.close();
    }
  };
  return (
    <section className="gallery" id="gallery">
      <Heading title="Galerie" url={trailData.sectionImages.gallery} />
      <div className="gallery-container">
        {trailData.gallery.map((img) => {
          return (
            <Image
              active={handleActive}
              imageArray={trailData.gallery}
              key={img}
              image={img}
              dialogRef={dialogRef}
            />
          );
        })}
      </div>
      <dialog className="gallery__dialog" ref={dialogRef} onClick={handleClose}>
        <div className="dialog__content">
          <img
            className="arrow arrow--left"
            src={arrowLeft}
            onClick={() =>
              setDialogImageIndex(trailData.gallery.indexOf(dialogImage) - 1)
            }
          />
          <img
            className="dialog__img"
            src={dialogImage}
            alt=""
            onClick={handleClose}
          />
          <img
            className="arrow arrow--right"
            src={arrowRight}
            onClick={() =>
              setDialogImageIndex(trailData.gallery.indexOf(dialogImage) + 1)
            }
          />
        </div>
      </dialog>
    </section>
  );
};
