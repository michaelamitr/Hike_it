import React from 'react';
import './checkbox.css';

export const Checkbox = ({ item }) => {
  return (
    <>
      <input type="checkbox" />
      <label htmlFor="">{item}</label>
      <br />
    </>
  );
};
