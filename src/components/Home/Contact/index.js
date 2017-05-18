import React from 'react';
import styles from './styles.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className={[styles['container'], styles['contact-container']].join(' ')}>
        <h2>Contact</h2>
        <p className={styles['contact-description']}>Mocht je vragen hebben over de trouwdag, of zou je graag iets willen doen op de dag zelf, neem dan vóór 17 juli contact op met een van onze ceremoniemeesteressen.</p>
        <div className={styles['contact']}>
          <h3>Elja Dokter - Brandsma</h3>
          <span>Tel: +31 6 34843996</span>
          <span>Email: elja_brandsma@live.com</span>
        </div>
        <div className={styles['contact']}>
          <h3>Femke van der Tuuk - Dokter</h3>
          <span>Tel: +31 6 81125822</span>
          <span>Email: femke_dokter@hotmail.com</span>
        </div>
      </section>
    );
  }
}

export default Contact;