import React, { useState } from 'react';
import './error.css';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  const [breakSign, setBreakSign] = useState(false);

  !breakSign ? setTimeout(() => setBreakSign(true), 2000) : null;

  return (
    <>
      <Header />
      <section className="error">
        <div className="error__page">
          <ul>
            <li className={breakSign ? 'break' : null}>
              <h1>GR404</h1>
            </li>
            <li>tudy cesta nevede</li>
            <li className="mom-i-want-home">
              <Link to="/">mami já chci domů 🥲</Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
