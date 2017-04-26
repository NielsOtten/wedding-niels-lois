
import React from 'react';
import styles from './styles.scss';
import Spotify from './Spotify/Spotify';


/*
 * http://stackoverflow.com/questions/26612749/search-for-track-using-spotify-api-add-in-album-name-and-artist-name
 * http://jsfiddle.net/UT7bQ/212/
 */
function Music() {
  return (
    <section className={styles['spotify']}>
      <div className={styles['image']}/>
      <Spotify/>
    </section>
  );
}

export default Music;
