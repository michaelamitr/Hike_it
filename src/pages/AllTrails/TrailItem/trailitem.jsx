import React from 'react';
import { Link } from 'react-router-dom';
import './trailitem.css';
import { GeneralInfo } from '../GeneralInfo/generalinfo';

export const TrailItem = ({ trail }) => {
  return (
    <>
      <Link to={`${trail.id}`}>
        <div
          className="heading__container-all-trails"
          style={{ backgroundImage: `url(${trail.bannerImage} )` }}
        >
          <h2 className="heading__title-all-trails">{trail.general.name}</h2>
          <div className="general__info-container">
            <GeneralInfo key={trail.id} generalInfo={trail.general} />
          </div>
          <button className="more-info">Více informací</button>
        </div>
      </Link>
    </>
  );
};
