import React from 'react';
import { Heading } from '../Heading/heading';
import { TrailMap } from '../Map/trailmap';
import './trailitem.css';

export const TrailItem = ({ trail }) => {
  console.log(trail);
  return (
    <>
      <Heading title={trail.general.name} url={trail.bannerImage} />
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
