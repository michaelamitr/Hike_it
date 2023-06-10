import React from 'react';
import { Heading } from '../Heading/heading';
import { TrailMap } from '../Map/trailmap';
import { Link } from 'react-router-dom';
import './trailitem.css';

export const TrailItem = ({ trail }) => {
  return (
    <>
      <Link to={`${trail.id}`}>
        <Heading title={trail.general.name} url={trail.bannerImage} />
      </Link>
      <div className="trail-item-map-container">
        <TrailMap
          key={trail.id}
          zoom={trail.mapData.mapComponentData.zoom}
          height={trail.mapData.mapComponentData.height}
          centerlat={trail.mapData.mapComponentData.center.lat}
          centerlng={trail.mapData.mapComponentData.center.lng}
          coords={trail.mapData.pathComponentCords}
          points={trail.mapData.markerlayerComponentPoints}
        />
      </div>
    </>
  );
};
