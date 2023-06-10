import React from 'react';
import './humansandnature.css';
import arrowLeft from './imgandicons/arrow_left.png';
import arrowRight from './imgandicons/arrow_right.png';
import wildCamping from './imgandicons/IMG_8742.jpg';
import { useState } from 'react';

export const HumansAndNature = () => {
  const [popupView, setPopupView] = useState(false);
  const [text, setText] = useState(0);
  const carousellText = [
    '1. Při táboření kempujeme pouze na povolených místech. Dbejme na to, abychom nezanechali žádné stopy po táboření.',
    '2. Dodržujme zákazy rozdělávání ohně. Ohniště zakládáme pouze na určených místech, ne však v případě, kdy to není povoleno.',
    '3. Nepoškozujme živou přírodu a neberme si s sebou domů rostliny ani zvířata.',
    '4. Znečišťujme přírodu co nejméně. Nesmíme po sobě zanechávat odpadky, použitý toaletní papír ani jiný odpad.',
    '5. Udržujme ticho. Nepořádáme hlučné večírky a nerušíme noční klid. Buďme ohleduplní ke všem zvířecím i lidským obyvatelům daného prostředí. ',
  ];
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
            onClick={() => {
              text > 0 ? setText(text - 1) : setText(4);
            }}
            className="carousell__img"
            src={arrowLeft}
            alt="arrow to the left"
          />
          <p className="carousell__text">{carousellText[text]}</p>
          <img
            onClick={() => {
              text === 4 ? setText(0) : setText(text + 1);
            }}
            className="carousell__img"
            src={arrowRight}
            alt="arrow to the left"
          />
        </div>
        <img
          src={wildCamping}
          className="wildcamping__img"
          alt="Stanování"
        ></img>
        <div className="did-you-know" onClick={() => setPopupView(!popupView)}>
          Věděli jste, že...
        </div>
        <div
          className={
            popupView
              ? 'did-you-know__container'
              : 'did-you-know__container did-you-know__hide'
          }
        >
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
