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
            console.log(album);
            return <Song
              key={album.id}
              id={album.id}
              title={album.name}
              image={album.images[1].url}/>
          })
        });
      })}, WAIT_INTERVAL);
  }

  searchAlbums(query) {
    return fetch('https://api.spotify.com/v1/search?q=' + query + '&type=album')
      .then(response => {
        return response.json();
      });
  }

  render() {
    return(
      <div className={styles['container-spotify']}>
        <div className={styles['spotify']}>
          <div className={styles['input-container']}>
            <div className={styles['input-wrapper']}>
              <input className={styles['input']} type="text" name="music" onChange={this.handleChange}/>
            </div>
          </div>
          <ul className={styles['songs']}>
            {this.state.songs}
          </ul>
        </div>
      </div>
    );
  }
}

export default Spotify;
