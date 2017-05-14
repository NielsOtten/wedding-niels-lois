import React from 'react';
import styles from './styles.scss';

import Spotify from './Spotify';
import RSVP from './RSVP';
import Carousel from './Carousel';
import Plan from './Plan';
import Contact from './Contact';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className={styles['container']}>
          <div className={styles['text']}>
            <h2>Verkering</h2>
            <p>
              De zomer van 2012 begon ons verhaal. Hiervoor kenden wij elkaar al een tijdje, maar Niels vond mijn beste vriendin interessanter en ik wilde altijd een jongen van minimaal 2 jaar ouder.. Die zomer skypten we erg veel, als vrienden, dat wel. Na onze vakanties leek het ons beiden leuk om eens af te spreken. Op 21 augustus was dan onze date. Niels was even vergeten dat hij eigenlijk rijles had, maar draaide met liefde voor de kosten op. We gingen uiteten bij ‘Le Connaisseur’. Met wel wat zenuwen liepen we richting de trein. Ik zei nog iets als: 'brr fris' zeg. Wat Niels als hint zag en vervolgens midden op Vredenburgplein de eerste kus gaf. In diezelfde week bleven we skypen en afspreken waarna we op 26 augustus besloten een relatie te beginnen. Dit is alweer zo lang geleden! Ik kan niet wachten om weer een stap verder te gaan in onze relatie.<br/>
              <strong>- Loïs</strong>
            </p>
          </div>
          <div className={styles['text']}>
            <h2>Verloving</h2>
            <p>
              Na een heuze zoektocht om de mooiste ring voor Loïs te vinden heb ik Loïs op 22 oktober 2016 ten huwelijk gevraagd. Nadat we op bezoek waren geweest bij haar oma in Zeist heb ik haar stiekem meegenomen naar het bos in Doorn. Terwijl wij onderweg waren naar de locatie hebben Femke en Maarten voor ons een pad van fakkels gemaakt waar in het verlengde een bistrosetje stond met daarop 2 glazen wijn. Eenmaal aangekomen bij de locatie heb ik Loïs op haar mooie hakken mee genomen door het bos (haar schoenen zagen er aan het einde niet meer uit). Uiteindelijk kwamen we aan en gingen we aan het bistrosetje zitten en heb ik verteld waarom ik met deze prachtige vrouw wilde trouwen en sloot mijn verhaal af door op mijn knieën te gaan. Ik stelde hierbij de belangrijkste vraag van mijn leven: 'Lieverd, wil je met mij trouwen'? Hierop zei ze volmondig: 'Ja!'. Dit was de eerste stap in onze verdere toekomst samen.<br/>
              <strong>- Niels</strong>
            </p>
          </div>
        </section>
        <Carousel/>
        <RSVP/>
        <Plan/>
        <Spotify/>
        <Contact/>
        <footer className={styles['container']}>
          Gemaakt door <strong><a href="https://www.linkedin.com/in/nkotten" target="_blank">Niels Otten</a></strong>
        </footer>
      </div>
    );
  }
}

export default Home;
