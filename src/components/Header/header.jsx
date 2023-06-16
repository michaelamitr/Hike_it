import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import burgerIcon from './icons/burgermenu-blue.svg';
import closeIcon from './icons/menu-close-blue.svg';
import darkModeIcon from './icons/moon-icon-blue.svg';
import lightModeIcon from './icons/sun-beige.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );

  const [imageSrc, setImageSrc] = useState(
    localStorage.getItem('darkMode') === 'true' ? lightModeIcon : darkModeIcon,
  );

  const toggleDarkMode = () => {
    const updatedMode = !isDarkMode;
    setIsDarkMode(updatedMode);
    localStorage.setItem('darkMode', String(updatedMode));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      setImageSrc(lightModeIcon);
    } else {
      root.classList.remove('dark');
      setImageSrc(darkModeIcon);
    }
  }, [isDarkMode]);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <img src={imageSrc} className="darkmode" onClick={toggleDarkMode}></img>
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
