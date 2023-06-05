import React from 'react';
import './humansandnature.css';
import arrowLeft from './arrows/arrow_left.png';
import arrowRight from './arrows/arrow_right.png';

export const HumansAndNature = () => {
  return (
    <section id="humans-and-nature">
      <div className="nature__page">
        <p className="nature__text">
          Při turistice a divokém kempování v přírodě je důležité se chovat
          ohleduplně k okolnímu prostředí a respektovat přírodní zdroje. Abychom
          si mohli vychutnat krásy divoké přírody i v budoucnu, je nutné se
          řídit zásadami „Leave-No-Trace“, čili tak, abychom po sobě nezanechali
          stopy. Tyto zásady zahrnují mnoho doporučení pro chování v přírodě,
          například:
        </p>
        <div className="carousell">
          <img
            className="carousell__img"
            src={arrowLeft}
            alt="arrow to the left"
          />
          <p className="carousell__text">
            Při táboření kempujeme pouze na povolených místech. Dbejme na to,
            abychom nezanechali žádné stopy po táboření.
          </p>
          <img
            className="carousell__img"
            src={arrowRight}
            alt="arrow to the left"
          />
        </div>
        <div className="nature__img">Nedáme sem obrázek?</div>
        <div className="did-you-know">Věděli jste, že...</div>
        <div className="did-you-know__container">
          <p className="did-you-know__text">
            Tato koncepce není nová a vznikla již v 60. letech 20. století.
            Původně byla vytvořena americkými skauty a nyní se stala globálním
            hnutím, které se snaží vzdělávat turisty a outdoorové nadšence o
            tom, jak respektovat a chránit přírodu. Díky tomuto hnutí se stáváme
            více ohleduplnými k okolí, ve kterém se pohybujeme, a můžeme tak
            napomoci udržitelnému cestování a zachování krás naší planety pro
            budoucí generace.
          </p>
        </div>
      </div>
    </section>
  );
};
