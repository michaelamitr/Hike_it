import React from 'react';
import './trail.css';
import { useParams } from 'react-router-dom';
import data from '../../../trails.json';
import { Heading } from '../Heading/heading';
import { Packing } from './Packing/packing';
import { TrailMap } from '../TrailMap/trailmap';
import { Image } from './Image/image';

export const Trail = () => {
  const { trailId } = useParams();
  const trailData = data.find((trail) => trail.id === trailId);
  console.log(trailData);
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
          <nav className="navigation">
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
          {trailData.gallery.map((img) => {
            return <Image key={img} image={img} />;
          })}
        </section>
      </div>
    </section>
  );
};
