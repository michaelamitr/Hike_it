import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import burgerIcon from './icons/burgermenu-blue.svg';
import darkModeIcon from './icons/moon-icon-blue.svg';

export const Header = () => {
  return (
    <header>
      <img src={darkModeIcon} className="darkmode"></img>
      <img className="burgermenu" src={burgerIcon}></img>
      <div className="navmob">
        <ul>
          <li>
            <NavLink to="/">Domů</NavLink>
          </li>
          <li>
            <NavLink to="/all-trails">Všechny trasy</NavLink>
          </li>
          <li>
            <NavLink to="/humans-and-nature">Lidé & příroda</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Kontakty</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Domů</NavLink>
          </li>
          <li>
            <NavLink to="/all-trails">Všechny trasy</NavLink>
          </li>
          <li>
            <NavLink to="/humans-and-nature">Lidé & příroda</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Kontakty</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
