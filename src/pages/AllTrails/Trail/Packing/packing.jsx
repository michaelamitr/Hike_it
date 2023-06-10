import React from 'react';
import './packing.css';
import { Checkbox } from '../Checkbox/checkbox';

export const Packing = ({ packing }) => {
  console.log(packing);
  return (
    <div className="packing__text">
      <p>{packing.startText}</p>
      <h4>Oblečení</h4>
      {packing.categories.clothes.map((clothes) => {
        return <Checkbox key={clothes} item={clothes} />;
      })}
      <h4>Obuv</h4>
      {packing.categories.shoes.map((shoe) => {
        return <Checkbox key={shoe} item={shoe} />;
      })}
      <h4>Další vybavení</h4>
      {packing.categories.otherClothes.map((other) => {
        return <Checkbox key={other} item={other} />;
      })}
      <p>{packing.categories.other}</p>
      {packing.categories.winterClothes.map((winter) => {
        return <Checkbox key={winter} item={winter} />;
      })}
    </div>
  );
};
