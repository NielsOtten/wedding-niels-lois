import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HeaderComponent = () => {
  return (
    <header>
      <div className="title">
        Loïs & Niels
      </div>
      <div className="nav-trigger">
        <span/>
      </div>
      <div className="main-menu">
        <ul>
          <li className="menu-link">
            <Link to="/home">HOME</Link>
          </li>
          <li className="menu-link">
            <Link to="/rsvp">RSVP</Link>
          </li>
          <li className="menu-link">
            <Link to="/home">STORY</Link>
          </li>
          <li className="menu-link">
            <Link to="/home">TRAVEL</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
