import React from 'react';
import styles from './styles.scss';
import Song from './Song';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class Spotify extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      music: '',
      songs: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChange(e) {
    clearTimeout(this.timer);

    const value = e.target.value;

    this.timer = setTimeout(() => {this.searchAlbums(value)
      .then(response => {
        this.setState({
          songs: response.body.tracks.items.map(track => <Song
            key={track.id}
            id={track.id}
            title={track.name}
            image={track.album.images[1].url}
            preview={track.preview_url}/>)
        });
      })
      .catch(error => {
        console.log(error);
      })}, WAIT_INTERVAL, true);
  }

  searchAlbums(query) {
    if (query === '' || query === 'undefined') throw 'No search query';
    return fetch('/spotify/search?q=' + query + '&type=album')
      .then(response => response.json());
  }

  render() {
    return(
      <section className={styles['container-spotify']}>
        <div className={styles['spotify']}>
          <div className={styles['input-container']}>
            <h2>Guilty pleasures</h2>
            <p>
              Vanwege het slechte internet ontvangst op de locatie (in een bunker) en het feit dat wij heel nieuwsgierig zijn naar jullie verzoeknummers, hierbij de vraag of jullie een swingende plaat weten voor de feestavond. Je kunt het via deze zoekbalk opzoeken (nummer en zanger(es)) en op de afbeelding een ‘preview’ beluisteren. Wij zullen 2 weken voor de bruiloft alle inzendingen beluisteren en er een afspeellijst van maken. We zijn benieuwd!
            </p>
            <div className={styles['input-wrapper']}>
              <input className={styles['input']} type="text" name="music" placeholder="Muziek" onChange={this.handleChange}/>
            </div>
          </div>
          <div className={styles['container']} style={{paddingTop: 0, paddingBottom: 0}}>
            <ul className={styles['songs']}>
              {this.state.songs}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Spotify;
