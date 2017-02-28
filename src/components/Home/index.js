
import React from 'react';
import styles from './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.image = 1;
    this.desktopImages = [];
    this.mobileImages = [];

    this.initImages();
  }

  render() {
    return (
      <section>
        <div>

        </div>
      </section>
    );
  }

  getCurrentImage() {

  }

  initImages() {
    for (let i = 1; i <= 13; i++) {
      this.desktopImages.push('')
    }
  }
}

export default Home;
