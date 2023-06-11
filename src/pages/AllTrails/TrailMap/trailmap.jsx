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
  ZoomControl,
} from 'react-mapycz';
import './trailmap.css';
import { Stage } from './Stage/stage';
import icon from './icons/map-point-blue.svg';

const MarkerView = () => {
  return <img src={icon} className="marker" />;
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
        <ZoomControl left={380} top={10} />
        <MouseControl pan={true} wheel={false} zoom={true} />
        <SyncControl />
        <MarkerLayer>
          {points.map((point) => (
            <Marker
              coords={{ lng: point.lng, lat: point.lat }}
              options={{
                title: point.title,
                url: (marker) => <MarkerView />,
              }}
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
