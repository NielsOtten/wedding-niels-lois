import React from 'react';
import styles from './styles.scss';

import Spotify from './Spotify';
import RSVP from './RSVP';
import Carousel from './Carousel';
import Plan from './Plan';

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
              De zomer van 2012 begon ons verhaal. Hiervoor kenden wij elkaar al een tijdje, maar Niels vond mijn beste vriendin interessanter en ik wilde altijd een jongen van minimaal 2 jaar ouder.. Die zomer skypten we erg veel, als vrienden, dat wel. Na onze vakanties leek het ons beiden leuk om eens af te spreken. Op 21 augustus was dan onze date. Niels was even vergeten dat hij eigenlijk rijles had, maar draaide met liefde voor de kosten op. We gingen uiteten bij ‘Le Connaisseur’. Met wel wat zenuwen liepen we richting de trein. Ik zei nog iets als: brr fris zeg. Wat Niels als hint zag en vervolgens midden op Vredenburgplein de eerste kus gaf. In diezelfde week daarna bleven we skypen en afspreken waarna we op 26 augustus besloten een relatie te beginnen.<br/>
              <strong>Liefs, Loïs</strong>

            </p>
          </div>
          <div className={styles['text']}>
            <h2>Verloving</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consectetur dicta dolor eos in nesciunt possimus quod repellendus, repudiandae tempora veniam veritatis! Iusto provident quaerat quidem sapiente veniam voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa dolorem et ipsum iste laudantium sit vero. Aliquid, aspernatur atque aut ducimus expedita incidunt magnam minus, molestiae nisi sed voluptatibus.
            </p>
          </div>
        </section>
        <Carousel/>
        <RSVP/>
        <Plan/>
        <Spotify/>
        <footer className={styles['container']}>
          Gemaakt door <strong><a href="https://www.linkedin.com/in/nkotten" target="_blank">Niels Otten</a></strong>
        </footer>
      </div>
    );
  }
}

export default Home;
