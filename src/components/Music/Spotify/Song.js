import React, { PropTypes } from 'react';
import styles from './styles.scss';

class Song extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClickOnSong.bind(this);
  }

  componentWillUnmount() {
    if (this.audioObject) {
      this.audioObject.pause();
    }
  }

  handleClickOnSong() {
    if (this.playing) {
      this.playing = false;
      this.audioObject.pause();
    } else {
      this.fetchTracks(this.props.id)
        .then(data => {
          this.audioObject = new Audio(data.tracks.items[0].preview_url);
          this.playing = true;
          this.audioObject.play();
        });
    }
  }

  fetchTracks(albumId) {
    return fetch('https://api.spotify.com/v1/albums/' + albumId)
      .then(response => {
        return response.json();
      });
  }

  render() {
    return (
      <li className={styles['song']} onClick={this.handleClick}>
        {this.props.title}
      </li>
    );
  }
}

Song.propTypes = {
  id: PropTypes.string
};

export default Song;
