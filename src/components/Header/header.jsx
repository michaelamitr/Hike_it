import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import burgerIcon from './icons/burgermenu-blue.svg';
import darkModeIcon from './icons/moon-icon-blue.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <img src={darkModeIcon} className="darkmode"></img>
      <img className="burgermenu" src={burgerIcon} onClick={toggleMenu}></img>
      <div className={open ? 'navmob' : 'navmob closenavmob'}>
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