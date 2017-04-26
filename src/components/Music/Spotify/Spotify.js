import React from 'react';
import styles from './styles.scss';

function Spotify() {
  return (
    <div className={styles['container']}>
      <input type="text"/>
      <div className="music-container">
        Alle muziek komt hier
      </div>
    </div>
  );
}

export default Spotify;
