import React from 'react';
import './mainpage.css';

export const MainPage = () => {
  return (
    <section id="main">
      <div className="main__banner">
        <div className="title">
          <h1 className="hikeit">Hike it</h1>
          <h2 className="likeit">. . . and like it</h2>
        </div>
      </div>
      <section className="main__section">
        <p className="main__text">
          Vítejte na naší webové stránce věnované dlouhým vzdálenostním trasám.
        </p>
        <p className="main__text">
          Pokud máte rádi pěší turistiku a cestování, určitě vás budou zajímat
          informace o nejkrásnějších a nejzajímavějších dálkových trasách, které
          na světě existují. Tyto trasy nabízejí nejen možnost poznat krásy
          přírody, ale také vás provedou historickými a kulturními památkami.
        </p>
        <p className="main__text">
          Na naší stránce se zaměřujeme na představení dálkových tras, které nás
          zaujaly, nebo které jsme sami absolvovali. Naším cílem je poskytnout
          vám inspiraci pro vaše pěší výlety a pomoci vám naplánovat vaši
          vlastní dálkovou túru.
        </p>
        <p className="main__text">
          Na této stránce se dozvíte více o jednotlivých trasách, včetně délky,
          obtížnosti, zajímavostí, které po cestě můžete vidět, a dalších
          užitečných informacích pro vaši cestu.
        </p>
        <p className="main__text">
          Přejeme vám příjemné prohlížení našich stránek a mnoho
          nezapomenutelných zážitků na vašich budoucích túrách!
        </p>
      </section>
    </section>
  );
};
