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
          songs: response.albums.items.map(album => {
            return <Song
              key={album.id}
              id={album.id}
              title={album.name}
              image={album.images[1].url}/>
          })
        });
      })
      .catch(error => {
        console.log(error);
      })}, WAIT_INTERVAL);
  }

  searchAlbums(query) {
    if (query === '' || query === 'undefined') throw 'No search query';
    return fetch('https://api.spotify.com/v1/search?q=' + query + '&type=album')
      .then(response => {
        return response.json();
      });
  }

  render() {
    return(
      <section className={styles['container-spotify']}>
        <div className={styles['spotify']}>
          <div className={styles['input-container']}>
            <h2>Guilty pleasures</h2>
            <p>
              Ons knal feest wordt gehouden in een bunker, dit is de ultieme locatie voor een feest alleen er is een probleem.
              We hebben daar geen internet, dit betekent dat we alle muziek van te voren moeten downloaden. Als je nummers hebt die je sowieso
              wil horen <strong>17 Augustus</strong> zoek ze dan hier op en voeg ze toe aan onze afspeellijst!
            </p>
            <div className={styles['input-wrapper']}>
              <input className={styles['input']} type="text" name="music" placeholder="Muziek" onChange={this.handleChange}/>
            </div>
          </div>
          <div className={styles['container']} style={{paddingTop: 0}}>
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
