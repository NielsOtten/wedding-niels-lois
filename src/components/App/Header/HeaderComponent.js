import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <header>
        <div className="title">
          Loïs & Niels
        </div>
        <div className={styles['nav-trigger']} onClick={() => this.openMenu()}>
          Menu
          <span/>
        </div>
        <div className={styles['main-menu'] + ' ' + (this.state.open ? styles['active'] : '')}>
          <ul>
            <li className={styles['menu-link']}>
              <Link to="/home">HOME</Link>
            </li>
            <li className={styles['menu-link']}>
              <Link to="/rsvp">RSVP</Link>
            </li>
            <li className={styles['menu-link']}>
              <Link to="/home">STORY</Link>
            </li>
            <li className={styles['menu-link']}>
              <Link to="/home">TRAVEL</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }

  openMenu() {
    if (this.state.open) {
      this.setState({open: false});
    } else {
      this.setState({open: true});
    }
  }
}

export default HeaderComponent;
