import React from 'react';
import { Heading } from '../Heading/heading';
import { Map } from '../Map/map';

export const TrailItem = ({ title, url }) => {
  return (
    <>
      <Heading title={title} url={url} />

      <div className="trail__map">tady bude komponenta mapy</div>
    </>
  );
};
