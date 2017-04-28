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
          <Colomn type='invite' position='1' text={text}/>
          <Colomn type='image' position='1' image={require('../../images/Desktop_image_1.jpg')}/>
        </section>
      </div>
    );
  }
}

export default Home;
