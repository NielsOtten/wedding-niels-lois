import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      menuBlack: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    windowHeight *= this.props.transition ? 0.70 : 1;
    const scrollHeight = window.scrollY;

    if (scrollHeight > windowHeight - 100) {
      this.setState({menuBlack: true});
    } else {
      this.setState({menuBlack: false});
    }
  }

  render() {
    return (
      <header>
        <div className={styles['nav-trigger'] + ' ' + (this.state.open ? styles['active'] : '') + ' ' + (this.state.menuBlack ? styles['menu-black'] : '')} onClick={() => this.openMenu()} >
          Menu
          <span/>
        </div>
        <div className={styles['main-menu'] + ' ' + (this.state.open ? styles['active'] : '')}>
          <ul>
            <li className={styles['menu-link']} onClick={() => this.openMenu()}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles['menu-link']} onClick={() => this.openMenu()}>
              <Link to="/music">Guilty pleasure</Link>
            </li>
            <li className={styles['menu-link']} onClick={() => this.openMenu()}>
              <Link to="/home">Story</Link>
            </li>
            <li className={styles['menu-link']} onClick={() => this.openMenu()}>
              <Link to="/travel">Travel</Link>
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

Menu.propTypes = {
  transition: PropTypes.bool
};

export default Menu;
