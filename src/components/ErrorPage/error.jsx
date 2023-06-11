import React from 'react';
import './error.css';

export const ErrorPage = () => {
  return (
    <section className="error">
      <div className="error__page">
        <h1>404: Tudy cesta nevede</h1>
        <p>Vydali jste se na špatný trail.</p>
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};
