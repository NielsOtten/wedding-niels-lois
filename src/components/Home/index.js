import React from 'react';
import styles from './styles.scss';

import Colomn from '../Colomn/Colomn';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = 'Wij hebben onze liefde & geluk in elkaar gevonden en zijn daarom klaar om samen deze wereld te ' +
      'ontdekken. Voordat we dit avontuur beginnen willen wij elkaar trouw beloven en delen wij dus met heel veel ' +
      'vreugde mee dat wij op 17-8-17 in het huwelijksbootje zullen stappen! ' +
      'Wij zouden graag met jullie hier een groot feest van maken, so save the date! Uitnodigingen volgen en via deze' +
      ' website zullen we t.z.t. meer informatie plaatsen voor onze grote dag.';

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
          {/* Text over Bruiloft hier Misschien tekst over onzelf */}
        </section>
        <section>
          {/* Text over de planning met mooie icoontjes */}
        </section>
        <section>
          {/* Meld je aan stuk */}
        </section>
        <section>
          {/* Text over De muziek lijst*/}
        </section>
        <section>
          {/* Spotify stuk */}
        </section>
        <section>
          {/* Location */}
        </section>
      </div>
    );
  }
}

export default Home;
