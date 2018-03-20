import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="pure-menu pure-menu-horizontal">
      <ul>
        <li className="pure-menu-item">
          <a href="/" className="pure-menu-link">
            Home
          </a>
        </li>
        <li className="pure-menu-item">
          <a href="/movies" className="pure-menu-link">
            Movies
          </a>
        </li>
          <li className="pure-menu-item">
              <a href="/books" className="pure-menu-link">
                  Books
              </a>
          </li>
        <li className="pure-menu-item">
          <a href="/404" className="pure-menu-link">
            404
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
