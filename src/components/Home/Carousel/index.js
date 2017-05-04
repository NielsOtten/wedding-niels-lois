import React from 'react';
import styles from './styles.scss';
import Parallax from '../Parallax';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className={styles['background-image']}>
        <Parallax className={styles['parallax']} bgImage={require('../../../images/ReduitFortVechten.jpg')} strength={100}/>
      </section>
    );
  }
}

export default Carousel;