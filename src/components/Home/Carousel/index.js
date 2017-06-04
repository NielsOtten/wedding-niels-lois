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
        <Parallax className={styles['parallax']}
                  bgClassName={[styles['parallax-2'], styles['fort']].join(' ')}
                  bgImage={require('../../../images/LoisNielsLS-037.jpg')}
                  bgHeight="100%"
                  bgWidth="100%"
                  strength={75}/>
        <Parallax className={styles['parallax']}
                  bgClassName={styles['parallax-2']}
                  bgImage={require('../../../images/Desktop_image_1.jpg')}
                  bgHeight="100%"
                  bgWidth="100%"
                  strength={75}/>
      </section>
    );
  }
}

export default Carousel;