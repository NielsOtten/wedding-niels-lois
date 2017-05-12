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
    window.addEventListener('orientationchange', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('orientationchange', this.onResize);
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
          <div className={styles['information']}>
            <div className={[styles['location'], styles['info']].join('')}>
              <h3>Locatie</h3>
              <p>Overdag zullen wij met de daggasten op Fort Vechten vertoeven. Om 18:45 nodigen we jullie van harte uit om de kerkelijke inzegening bij te wonen in de Oude Kerk, 1e Dorpsstraat 1, te Zeist. Ons geloof speelt een grote rol in ons leven en daarom ben je hier ook van harte voor uitgenodigd. Om 20:30 is vervolgens de receptie op Fort Vechten te Bunnik in de Reversezaal. De parkeerplaats is schuintegenover de Achterdijk 21, te Zeist. Aansluitend is het feest op dezelfde locatie.
              </p>
              <a href="https://www.google.nl/maps/place/Fort+Vechten/@52.0589293,5.165205,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6663841421963:0xa18f6ce098a24557!8m2!3d52.0589293!4d5.1673937?q=fort+vechten&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjfwOuXpd7TAhWSJ1AKHVg4BRIQ_AUICigB" target="_blank">Routebeschrijving</a>
            </div>
            <div className={[styles['location'], styles['info']].join('')}>
              <h3>Dresscode</h3>
              <p>We willen vragen (vooral de dames) om slippers mee te nemen. Zodat met het feest de hoge hakken uit gaan en we kunnen genieten van de zomeravond en kunnen dansen op de muziek. Verder zouden wij het leuk vinden als van de daggasten de heren bretels om zouden doen.</p>
            </div>
            <div className={[styles['location'], styles['info']].join('')}>
              <h3>Cadeau</h3>
              <p>Het zal je vast niet verbazen, maar deze dag is een behoorlijke investering. We zijn daarom enorm gelukkig met een envelopje met inhoud! Mocht je toch liever iets tastbaars willen geven dan hebben wij ook een verlanglijstje opgesteld welke te vinden is via deze link:
              </p>
              <a href="https://www.lijstje.nl/287381" target="_blank">Lijstje.nl</a>
            </div>
          </div>
          <div className={styles['planning']}>
            <div className={styles['time']}>
              <img className={styles['icon']} src={require('../../../images/church.svg')} alt="Kerk"/>
              <p>Kerkdienst</p>
              <h6>18:45</h6>
            </div>
            <div className={styles['time']}>
              <img className={styles['icon']} src={require('../../../images/chat.svg')} alt="Praten"/>
              <p>Receptie</p>
              <h6>20:30</h6>
            </div>
            <div className={styles['time']}>
              <img className={styles['icon']} src={require('../../../images/romantic-music.svg')} alt="Feest"/>
              <p>Feest</p>
              <h6>21:30</h6>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Plan;