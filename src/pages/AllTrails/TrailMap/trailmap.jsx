import React from 'react';
import {
  Map,
  ZoomControl,
  MouseControl,
  KeyboardControl,
  CompassControl,
  SyncControl,
  MarkerLayer,
  Marker,
  PathLayer,
  Path,
} from 'react-mapycz';
import './trailmap.css';
import { Stage } from './Stage/stage';

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
        <ZoomControl />
        <CompassControl top={50} />
        <KeyboardControl />
        <MouseControl pan={true} wheel={true} zoom={true} />
        <SyncControl />
        <MarkerLayer>
          {points.map((point) => (
            <Marker
              coords={{ lng: point.lng, lat: point.lat }}
              options={{ title: point.title }}
              card={{
                header: point.title,
                body: (
                  <Stage
                    number={point.description.number}
                    name={point.description.name}
                    distance={point.description.distance}
                    duration={point.description.duration}
                    description={point.description.description}
                  />
                ),
                // footer: (coords) => (
                //   <div className="card--footer">
                //     Zeměpisná délka: {coords.lng}, zeměpisná šířka: {coords.lat}
                //   </div>
                // ),
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
