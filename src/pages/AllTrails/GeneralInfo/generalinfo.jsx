import React from 'react';
import './generalinfo.css';

export const GeneralInfo = ({ generalInfo }) => {
  const { location, length, difficulty, type, stagesNumber, monthsToGo } =
    generalInfo;
  return (
    <div className="general__info_in-alltrails">
      <p>Lokalita: {location}</p>
      <p>Délka: {length}</p>
      <p>Počet etap: {stagesNumber}</p>
      <p>Typ: {type}</p>
      <p>Obtížnost: {difficulty}</p>
      <p>Vhodné absolvovat: {monthsToGo}</p>
    </div>
  );
};
