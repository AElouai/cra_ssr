import React from 'react';
const SideBar = props => (
  <div className="sidebar pure-u-1 pure-u-md-1-4">
    <div className="header">
      <h1 className="brand-title">A Sample Blog</h1>
      <h2 className="brand-tagline">Creating a blog layout using Pure</h2>

      <nav className="nav">
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
