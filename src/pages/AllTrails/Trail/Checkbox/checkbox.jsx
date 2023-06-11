import React from 'react';
import './checkbox.css';

export const Checkbox = ({ item }) => {
  return (
    <label className="container">
      {item}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};
