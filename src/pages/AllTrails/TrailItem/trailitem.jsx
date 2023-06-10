import React from 'react';
import { Heading } from '../Heading/heading';
import { Link } from 'react-router-dom';
import './trailitem.css';

export const TrailItem = ({ trail }) => {
  return (
    <>
      <Link to={`${trail.id}`}>
        <Heading title={trail.general.name} url={trail.bannerImage} />
      </Link>
    </>
  );
};
