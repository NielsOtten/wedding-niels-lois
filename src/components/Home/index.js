
import React from 'react';
import styles from './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className={styles['colomn']}>
          <p className={styles['col-6']}>Wij hebben onze liefde & geluk in elkaar gevonden en zijn daarom klaar om samen deze wereld te ontdekken. Voordat we dit avontuur beginnen willen wij elkaar trouw beloven en delen wij dus met heel veel vreugde mee dat wij op 17-8-17 in het huwelijksbootje zullen stappen!</p>
          <p className={styles['col-6']}>Wij zouden graag met jullie hier een groot feest van maken, so save the date! Uitnodigingen volgen en via deze website zullen we t.z.t. meer informatie plaatsen voor onze grote dag.</p>
        </div>
      </section>
    );
  }
}

export default Home;
