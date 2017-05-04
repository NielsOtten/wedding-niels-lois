import React from 'react';
import styles from './styles.scss';

import Spotify from './Spotify';
import RSVP from './RSVP';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className={styles['container']}>
          <div className={styles['text']}>
            <h2>Kopje 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam consectetur dicta dolor eos in nesciunt possimus quod repellendus, repudiandae tempora veniam veritatis! Iusto provident quaerat quidem sapiente veniam voluptas.
            </p>
          </div>
          <div className={styles['text']}>
            <h2>Kopje 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi id illo illum impedit minus.
            </p>
          </div>
        </section>
        <section className={styles['fort-vechten']}>
          {/* Foto's van fort vechten */}
        </section>
        <RSVP/>
        <section className={styles['container']}>
          <div className={styles['row']}>
            <h2>Planning</h2>
            <div className={styles['time']}>
              <img className={styles['icon']} src={require('../../images/engagement-ring.svg')} alt="Wedding ring"/>
              <p>Kerkdienst</p>
              <h6>19:00</h6>
            </div>
            <div className={styles['time']}>
              <img className={styles['icon']} src={require('../../images/chat.svg')} alt="Praten"/>
              <p>Receptie</p>
              <h6>20:30</h6>
            </div>
            <div className={styles['time']}>
              <img className={styles['icon']} src={require('../../images/chat.svg')} alt="Feest"/>
              <p>Feest</p>
              <h6>21:30</h6>
            </div>
          </div>
        </section>
        <Spotify/>
        <section className={styles['container']}>
          {/* Spotify stuk */}
        </section>
        <section className={styles['container']}>
          {/* Location */}
        </section>
      </div>
    );
  }
}

export default Home;
