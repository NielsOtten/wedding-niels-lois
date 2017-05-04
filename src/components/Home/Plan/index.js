import React from 'react';
import styles from './styles.scss';

class Plan extends React.Component {
  constructor(props) {
    super(props);

    this.start = 920;

    this.state = {
      width: 0,
      margin: 0,
    };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const width = window.innerWidth >= 920 ? 920 + (window.innerWidth - 920) / 2 : window.innerWidth;
    const margin = window.innerWidth >= 920 ? (window.innerWidth - 920)/2 : 0;

    this.setState({
      width: width,
      margin: margin
    });
  }

  render() {
    return(
      <section className={styles['container']}>
        <div className={styles['row']}>
          <span className={styles['background']} style={{
            margin: '0 0 0 -' + this.state.margin + 'px',
            width: this.state.width
          }}/>
          <h2>Planning</h2>
          <div className={styles['time']}>
            <img className={styles['icon']} src={require('../../../images/engagement-ring.svg')} alt="Wedding ring"/>
            <p>Kerkdienst</p>
            <h6>19:00</h6>
          </div>
          <div className={styles['time']}>
            <img className={styles['icon']} src={require('../../../images/chat.svg')} alt="Praten"/>
            <p>Receptie</p>
            <h6>20:30</h6>
          </div>
          <div className={styles['time']}>
            <img className={styles['icon']} src={require('../../../images/chat.svg')} alt="Feest"/>
            <p>Feest</p>
            <h6>21:30</h6>
          </div>
        </div>
      </section>
    );
  }
}

export default Plan;