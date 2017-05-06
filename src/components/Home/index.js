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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consectetur dicta dolor eos in nesciunt possimus quod repellendus, repudiandae tempora veniam veritatis! Iusto provident quaerat quidem sapiente veniam voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa dolorem et ipsum iste laudantium sit vero. Aliquid, aspernatur atque aut ducimus expedita incidunt magnam minus, molestiae nisi sed voluptatibus.
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
        <section className={styles['container']}>
          {/* Location */}
        </section>
      </div>
    );
  }
}

export default Home;
