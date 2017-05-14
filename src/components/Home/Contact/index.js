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
        <p className={styles['contact-description']}>Mocht je vragen hebben over de trouwdag, of zou je graag iets willen doen op de dag zelf. Neem dan contact op
        met een van onze ceremoniemeesteressen.</p>
        <div className={styles['contact']}>
          <h3>Ceremonie meesteres <strong>Elja</strong></h3>
          <p>Contact gegevens....</p>
        </div>
        <div className={styles['contact']}>
          <h3>Ceremonie meesteres <strong>Femke</strong></h3>
          <p>Contact gegevens....</p>
        </div>
      </section>
    );
  }
}

export default Contact;