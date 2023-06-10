import React from 'react';
import './trail.css';
import { Checkbox } from './Checkbox/checkbox';
import { useParams } from 'react-router-dom';
import data from '../../../trails.json';
import { Heading } from '../Heading/heading';

export const Trail = () => {
  const { trailId } = useParams();
  const trailData = data.find((trail) => trail.id === trailId);
  console.log(trailData.bannerImage);
  return (
    <section id="trail">
      <div
        className="trail__banner"
        style={{
          backgroundImage: `url(${trailData.bannerImage})`,
        }}
      >
        <div className="title">
          <h1 className="title__heading">{trailData.general.name}</h1>
        </div>
      </div>
      <div className="trail__page">
        <section className="general">
          <nav className="navigation">
            <a href="#">Obecné info</a>
            <a href="#">Etapy</a>
            <a href="#">Co s sebou</a>
            <a href="#">Galerie</a>
          </nav>

          <Heading title="Obecné" url={trailData.sectionImages.general} />
          <div className="general__info">
            <p>Lokalita: {trailData.general.location}</p>
            <p>Délka: {trailData.general.length}</p>
            <p>Počet etap: {trailData.general.stagesNumber}</p>
            <p>Typ: {trailData.general.type}</p>
            <p>Obtížnost: {trailData.general.difficulty}</p>
            <p>Vhodné absolvovat: {trailData.general.monthsToGo}</p>
          </div>

          <div className="general__text">
            {/* <h2 className="heading__desktop">Obecné info</h2> */}
            {trailData.info}
          </div>
        </section>
        <section className="stages">
          <Heading title="Etapy" url={trailData.sectionImages.stages} />
        </section>

        <section className="packing">
          <Heading title="Co s sebou" url={trailData.sectionImages.packing} />
          <div className="packing__text">
            <p>
              Když se chystáte na Rybářskou stezku v Portugalsku, je důležité
              vědět, co si s sebou zabalit do batohu. Vzhledem k tomu, že
              Portugalsko má teplé a slunečné počasí po většinu roku, budete
              potřebovat zejména lehké a pohodlné oblečení, ale také vybavení
              pro případný déšť a vítr. Zde je seznam věcí, které byste neměli
              zapomenout.
            </p>
            <h4>Oblečení</h4>
            <Checkbox />
            <h4>Obuv</h4>
            <Checkbox />
            <h4>Další vybavení</h4>
            <Checkbox />
            <p>
              Pokud se chystáte na Fishermen's Trail v zimních měsících, měli
              byste zvážit následující další vybavení:
            </p>
            <Checkbox />
            <p>
              Pamatujte si, že méně je někdy více, a že není nutné si s sebou
              brát příliš mnoho věcí. Mějte na paměti, že každou věc, kterou si
              zabalíte, si rovněž ponesete na vašich zádech. A nakonec,
              nezapomeňte na pravidla chování v přírodě, abyste pomohli udržet
              krásy životního prostředí i pro další generace.
            </p>
          </div>
        </section>

        <section className="gallery">
          <Heading title="Galerie" url={trailData.sectionImages.gallery} />
        </section>
      </div>
    </section>
  );
};
