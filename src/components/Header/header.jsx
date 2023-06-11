import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import burgerIcon from './icons/burgermenu-blue.svg';
import closeIcon from './icons/menu-close-blue.svg';
import darkModeIcon from './icons/moon-icon-blue.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <img src={darkModeIcon} className="darkmode"></img>
      <img
        className="burgermenu"
        src={open ? closeIcon : burgerIcon}
        onClick={toggleMenu}
      ></img>
      <div className={open ? 'navmob' : 'navmob closenavmob'}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Domů
            </NavLink>
          </li>
          <li>
            <NavLink to="/vsechny-trasy" onClick={toggleMenu}>
              Všechny trasy
            </NavLink>
          </li>
          <li>
            <NavLink to="/lide-a-priroda" onClick={toggleMenu}>
              Lidé & příroda
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakty" onClick={toggleMenu}>
              Kontakty
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Domů</NavLink>
          </li>
          <li>
            <NavLink to="/vsechny-trasy">Všechny trasy</NavLink>
          </li>
          <li>
            <NavLink to="/lide-a-priroda">Lidé & příroda</NavLink>
          </li>
          <li>
            <NavLink to="/kontakty">Kontakty</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
