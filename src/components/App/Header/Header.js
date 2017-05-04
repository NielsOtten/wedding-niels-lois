import React, { PropTypes } from 'react';
import styles from './styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.image = 1;
    this.desktopImages = [];
    this.mobileImages = [];
    this.initImages();

    this.state = {
      mobileImage: this.getCurrentImage(this.image, true),
      desktopImage: this.getCurrentImage(this.image)
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        mobileImage: this.getCurrentImage(this.image, true),
        desktopImage: this.getCurrentImage(this.image)
      });

      this.image++;
      if (this.image >= 12) {
        this.image = 1;
      }

      const nextDesktopImage = new Image();
      nextDesktopImage.src = this.getCurrentImage(this.image + 1, false);

      const nextMobileImage = new Image();
      nextMobileImage.src = this.getCurrentImage(this.image + 1, false);

    }, 5000);
  }

  render() {
    return (
      <div className={this.props.transition ? styles['small-header'] : styles['big-header']}>
        <div className={styles['mobile-image']} style={{backgroundImage: 'url(' + this.state.mobileImage + ')'}}/>
        <div className={styles['desktop-image']} style={{backgroundImage: 'url(' + this.state.desktopImage + ')'}}/>
        <div className={styles['center-text']}>
          <div className={styles['text']}>
            The Future
            <br/>
            Mr & Mrs Otten
          </div>
          <div className={styles['sub-text']}>
            August 17, 2017
          </div>
        </div>
        <div className={styles['rsvp']}>
          <button>
            Meld je aan
          </button>
        </div>
        <div className={styles['icon-scroll']}/>
      </div>
    );
  }

  getCurrentImage(image, mobile = false) {
    return mobile ? this.mobileImages[image] : this.desktopImages[image];
  }

  initImages() {
    for (let i = 1; i <= 13; i++) {
      this.desktopImages.push(require(`../../../images/Desktop_image_${i}.jpg`));
      this.mobileImages.push(require(`../../../images/Phone_image_${i}.jpg`));
    }
  }
}

Header.propTypes = {
  image: PropTypes.string,
  carousel: PropTypes.bool,
  transition: PropTypes.bool
};

export default Header;