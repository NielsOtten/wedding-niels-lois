import React, { PropTypes } from 'react';
import styles from './styles.scss';

class Song extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      loading: false,
      errors: [],
    };

    this.handleClick = this.handleClickOnSong.bind(this);
    this.addClick = this.handleAddClick.bind(this);
  }

  componentWillUnmount() {
    if (this.audioObject) {
      this.audioObject.pause();
    }
  }

  handleClickOnSong() {
    if (this.state.playing) {
      this.setState({
        playing: false
      });
      this.audioObject.pause();
    } else {
      this.fetchTracks(this.props.id)
        .then(data => {
          this.audioObject = new Audio(data.tracks.items[0].preview_url);
          this.setState({
            playing: true
          });
          this.audioObject.play();
        });
    }
  }

  handleAddClick(e) {
    e.preventDefault();

    if (this.state.loading) return false;

    this.setState({
      loading: true
    });

    const conf = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        spotifyId: this.props.id,
        name: this.props.title
      })
    };

    fetch('/addSong', conf)
      .then(res => {
        this.setState({
          loading: false
        });

        return res.json()
      })
      .then(json => {
        if (json.success) {
          alert('Nummer toegevoegd.');
          this.setState({
            errors: []
          })
        }
      })
  }

  fetchTracks(albumId) {
    return fetch('https://api.spotify.com/v1/albums/' + albumId)
      .then(response => {
        return response.json();
      });
  }

  render() {
    let style = {};
    if (this.state.playing) {
      style = {
        display: 'block'
      }
    }

    return (
      <li className={styles['song']}>
        <div className={styles['images']} onClick={this.handleClick}>
          <img src={this.props.image} alt={this.props.title}/>
          <img style={style} className={styles['playing']} src={require('../../../images/Pause.png')} alt="Pause"/>
        </div>
        <div className={styles['info']}>
          <h3>{this.props.title}</h3>
        </div>
        <div className={styles['actions']}>
          <button className={styles['add']} onClick={this.addClick}/>
        </div>
      </li>
    );
  }
}

Song.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string
};

export default Song;
