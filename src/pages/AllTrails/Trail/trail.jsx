import React from 'react';
import './trail.css';
import { Checkbox } from './Checkbox/checkbox';

export const Trail = () => {
  return (
    <section id="trail">
      <div className="trail__banner">
        <div className="title">
          <h1 className="title__heading">Rybářská stezka</h1>
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

          <div className="trail__heading">
            <h2 className="trail__text">Obecné info</h2>
          </div>
          <div className="general__info">
            <p>Lokalita:</p>
            <p>Délka:</p>
            <p>Počet etap:</p>
            <p>Typ:</p>
            <p>Obtížnost:</p>
            <p>Vhodné absolvovat:</p>
          </div>

          <div className="general__text">
            <h2 className="heading__desktop">Obecné info</h2>
            <p>
              Rybářská stezka (Trilho dos Pescadores, Fishermen's Trail) se
              nachází na jihozápadním pobřeží Portugalska. Je to okouzlující
              trasa, která vás provede fascinujícím světem přírodních krás podél
              pobřeží Alentejo a Algarve, prochází napříč úchvatnými plážemi,
              skalnatými útesy a malebnými rybářskými vesničkami. Nabízí
              nezapomenutelné dobrodružství pro milovníky přírody, oceánu a pro
              ty, kteří hledají klid a odpočinek.
            </p>
            <p>
              Trasa začíná ve vesnici Porto Covo a končí ve vesnici Lagos. Je
              možné ji absolvovat i v opačném směru, záleží po jaké ruce máte
              výhled na moře raději. Oficiální start trasy je na pláži São
              Torpes, na kterou se lze dostat z městečka Sines.
            </p>
            <p>
              Trasa každý den prochází menším městečkem, rybářskou vesnicí. Do
              každé se dá dopravit autobusem Z Lisabonu, Fara, nebo jiného
              většího města. Pro plánování přepravy v Portugalsku vřele
              doporučujeme následující stránky. Autobusy i vlaky jsou
              spolehlivé. <br />
              <a href="https://rede-expressos.pt/en">Rede expressos</a> <br />
              <a href="https://www.flixbus.cz/">Flixbus</a>
              <br />
              <a href="https://www.cp.pt/passageiros/en">Combois de Portugal</a>
              <br />
            </p>
            <p>
              TIP: Jízdenka v Lisabonu, kterou si pořídíte v automatu, se dá
              nabíjet opakovaně, doporučujeme Vám si ji proto ponechat.
            </p>
            <p>
              Trasu je možné absolvovat kdykoliv v roce. Nevhodné jsou pouze
              letní měsíce od června do září, kdy teploty mohou být velmi
              vysoké. Na trase prakticky není stín, budete se pohybovat hlavně
              po útesech a pláních s nízkými rostlinami.
            </p>
            <p>
              Přímo na trase zdroje vody prakticky nejsou, a čerpat vodu z
              potoků které ústí do moře není vhodné. Tato voda je téměř na konci
              svého přírodního cyklu, vlévá se do moře a kdo ví čím vším si po
              cestě prošla. Ve vnitrozemí se nachází četné zemědělské objekty a
              voda z těchto zdrojů může obsahovat řadu nežádoucích látek.
            </p>
            <p>
              Trasa každý den prochází civilizací, je proto možné si dokoupit
              potraviny, vodu i jiné nezbytnosti. Zároveň zde je i mnoho
              možností ubytování, od hostelů po hotely či Airbnb.
            </p>
            <p>
              Zejména v hlavní sezóně, která je přibližně březen–květen +
              září–říjen je dobré si ubytování rezervovat klidně i více než 2
              měsíce předem. Trasa je oblíbená a výhodná ubytování se rychle
              obsadí. Mimo tyto měsíce je atmosféra trasy celkově klidnější.
              Zároveň však v zimních měsících bývají mnohá ubytování a obchody
              zavřené. Vždycky se však najde místo kde můžete složit hlavu a
              doplnit zásoby.
            </p>
            <p>
              Pokud si chcete při chůzi dopřát co největší komfort, je možné si
              nechat batohy přepravit z ubytování do ubytování v dalším
              průchozím bodu skrz službu{' '}
              <a href="https://www.vicentinatransfers.pt/">
                Vicentina Transfers
              </a>
              .
            </p>
          </div>
        </section>
        <section className="stages">
          <div className="trail__heading">
            <h2 className="trail__text">Etapy</h2>
          </div>
        </section>

        <section className="packing">
          <div className="trail__heading">
            <h2 className="trail__text">Co s sebou</h2>
          </div>
          <div className="packing__text">
            <h3 className="heading__desktop">Jak se zabalit</h3>
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
          <div className="trail__heading">
            <h2 className="trail__text">Galerie</h2>
          </div>
        </section>
      </div>
    </section>
  );
};
