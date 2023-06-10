import React from 'react';
import { Heading } from '../Heading/heading';
import { Map } from '../Map/map';
import { Link } from 'react-router-dom';

export const TrailItem = ({ title, url, id }) => {
  return (
    <>
      <Link to={`${id}`}>
        <Heading title={title} url={url} />
      </Link>

      <div className="trail__map">tady bude komponenta mapy</div>
    </>
  );
};
