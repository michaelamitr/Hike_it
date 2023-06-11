import React, { useState, useEffect, useRef } from 'react';
import './trail.css';
import { useParams } from 'react-router-dom';
import data from '../../../trails.json';
import { Heading } from '../Heading/heading';
import { Packing } from './Packing/packing';
import { TrailMap } from '../TrailMap/trailmap';
import { Image } from './Image/image';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';

export const Trail = () => {
  const dialogRef = useRef();
  const [dialogImage, setDialogImage] = useState('');
  const { trailId } = useParams();
  const trailData = data.find((trail) => trail.id === trailId);

  const setDialogImageIndex = (index) => {
    console.log('index ' + index);
    console.log('trailData.gallery.length ' + trailData.gallery.length);
    let newIndex;
    if (index >= trailData.gallery.length) {
      newIndex = 0;
    } else if (index < 0) {
      newIndex = trailData.gallery.length - 1;
    } else {
      newIndex = index;
    }
    console.log('newIndex ' + newIndex);
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
    <section id="trail">
      <div
        className="trail__banner"
        style={{
          backgroundImage: `url(${trailData.bannerImage})`,
        }}
      >
        <div className="title">
          <h1 className="title__heading">{trailData.general.name}</h1>
        </div>
      </div>
      <div className="trail__page">
        <div className="trail__flex">
          <nav className="navigation" id="nav">
            <a href="#general">Obecné info</a>
            <a href="#stages">Etapy</a>
            <a href="#packing">Co s sebou</a>
            <a href="#gallery">Galerie</a>
          </nav>
          <div className="general__info general__info--desktop">
            <p>Lokalita: {trailData.general.location}</p>
            <p>Délka: {trailData.general.length}</p>
            <p>Počet etap: {trailData.general.stagesNumber}</p>
            <p>Typ: {trailData.general.type}</p>
            <p>Obtížnost: {trailData.general.difficulty}</p>
            <p>Vhodné absolvovat: {trailData.general.monthsToGo}</p>
          </div>
          <a href="#nav" className="scroll-pic"></a>
        </div>
        <section className="general" id="general">
          <Heading title="Obecné" url={trailData.sectionImages.general} />
          <div className="general__info general__info--mobile">
            <p>Lokalita: {trailData.general.location}</p>
            <p>Délka: {trailData.general.length}</p>
            <p>Počet etap: {trailData.general.stagesNumber}</p>
            <p>Typ: {trailData.general.type}</p>
            <p>Obtížnost: {trailData.general.difficulty}</p>
            <p>Vhodné absolvovat: {trailData.general.monthsToGo}</p>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: trailData.info }}
            className="general__text"
          />
        </section>
        <section className="stages" id="stages">
          <Heading title="Etapy" url={trailData.sectionImages.stages} />
          <TrailMap
            key={trailData.mapData.id}
            zoom={trailData.mapData.mapComponentData.zoom}
            height={trailData.mapData.mapComponentData.height}
            centerlat={trailData.mapData.mapComponentData.center.lat}
            centerlng={trailData.mapData.mapComponentData.center.lng}
            coords={trailData.mapData.pathComponentCords}
            points={trailData.mapData.markerlayerComponentPoints}
          />
        </section>

        <section className="packing" id="packing">
          <Heading title="Co s sebou" url={trailData.sectionImages.packing} />
          <Packing packing={trailData.whatToPack} />
        </section>

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
          <dialog
            className="gallery__dialog"
            ref={dialogRef}
            onClick={handleClose}
          >
            <div className="dialog__content">
              <img
                className="arrow arrow--left"
                src={arrowLeft}
                onClick={() =>
                  setDialogImageIndex(
                    trailData.gallery.indexOf(dialogImage) - 1,
                  )
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
                  setDialogImageIndex(
                    trailData.gallery.indexOf(dialogImage) + 1,
                  )
                }
              />
            </div>
          </dialog>
        </section>
      </div>
    </section>
  );
};
