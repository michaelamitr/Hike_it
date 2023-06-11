import React from 'react';
import {
  Map,
  MouseControl,
  KeyboardControl,
  SyncControl,
  MarkerLayer,
  Marker,
  PathLayer,
  Path,
} from 'react-mapycz';
import './trailmap.css';
import { Stage } from './Stage/stage';
import icon from './icons/map-point-blue.png';

const MarkerView = ({ title }) => {
  return <img src={icon} alt={title} title={title} className="marker" />;
};

export const TrailMap = ({
  zoom,
  height,
  centerlat,
  centerlng,
  points,
  coords,
}) => {
  return (
    <div className="trail-item-map-container">
      <Map
        zoom={zoom}
        height={height}
        center={{ lat: centerlat, lng: centerlng }}
      >
        <KeyboardControl />
        <MouseControl pan={true} wheel={true} zoom={true} />
        <SyncControl />
        <MarkerLayer>
          {points.map((point) => (
            <Marker
              coords={{ lng: point.lng, lat: point.lat }}
              options={{ title: point.title }}
              card={{
                body: () => (
                  <Stage
                    number={point.description.number}
                    name={point.description.name}
                    distance={point.description.distance}
                    duration={point.description.duration}
                    description={point.description.description}
                  />
                ),
              }}
              key={point.title}
            />
          ))}
          <PathLayer>
            <Path coords={coords} criterion="turist2" dynamicRoute={true} />
          </PathLayer>
        </MarkerLayer>
      </Map>
    </div>
  );
};
