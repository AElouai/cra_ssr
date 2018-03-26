import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = props => (
  <div className="sidebar pure-u-1 pure-u-md-1-4">
    <div className="header">
      <h1 className="brand-title">A Sample Blog</h1>
      <h2 className="brand-tagline">Creating a blog layout using Pure</h2>

      <nav className="nav">
        <ul className="nav-list">
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
            <Link to="/books" className="pure-menu-link">
              Books
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/404" className="pure-menu-link">
              404
            </Link>
          </li>
        </ul>

        <ul className="nav-list">
          <h5>Favorites Movies</h5>
          <li className="nav-item">
            {props.favorites.map((item, index) => {
              return (
                <a
                  className="pure-button"
                  href={`/movies/${item.id}`}
                  key={index}
                >
                  {item.title}
                </a>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default SideBar;
