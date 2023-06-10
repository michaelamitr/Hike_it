import React from 'react';
import './trail.css';
import { Checkbox } from './Checkbox/checkbox';
import { useParams } from 'react-router-dom';
import data from '../../../trails.json';
import { Heading } from '../Heading/heading';
import { Packing } from './Packing/packing';

export const Trail = () => {
  const { trailId } = useParams();
  const trailData = data.find((trail) => trail.id === trailId);
  console.log(trailData.bannerImage);
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
        <section className="general">
          <nav className="navigation">
            <a href="#">Obecné info</a>
            <a href="#">Etapy</a>
            <a href="#">Co s sebou</a>
            <a href="#">Galerie</a>
          </nav>

          <Heading title="Obecné" url={trailData.sectionImages.general} />
          <div className="general__info">
            <p>Lokalita: {trailData.general.location}</p>
            <p>Délka: {trailData.general.length}</p>
            <p>Počet etap: {trailData.general.stagesNumber}</p>
            <p>Typ: {trailData.general.type}</p>
            <p>Obtížnost: {trailData.general.difficulty}</p>
            <p>Vhodné absolvovat: {trailData.general.monthsToGo}</p>
          </div>

          <div className="general__text">
            {/* <h2 className="heading__desktop">Obecné info</h2> */}
            {trailData.info}
          </div>
        </section>
        <section className="stages">
          <Heading title="Etapy" url={trailData.sectionImages.stages} />
        </section>

        <section className="packing">
          <Heading title="Co s sebou" url={trailData.sectionImages.packing} />
          <Packing packing={trailData.whatToPack} />
        </section>

        <section className="gallery">
          <Heading title="Galerie" url={trailData.sectionImages.gallery} />
        </section>
      </div>
    </section>
  );
};
