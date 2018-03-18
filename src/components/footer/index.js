import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => (
  <div className="footer">
    <div className="pure-menu pure-menu-horizontal">
      <ul>
        <li className="pure-menu-item">
          <Link to="/" className="pure-menu-link">
            Home
          </Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/movies" className="pure-menu-link">
            Movies
          </Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/404" className="pure-menu-link">
            404
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
