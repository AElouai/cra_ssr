import React from 'react';

const Home = () => (
  <section className="post">
    <header className="post-header">
      <h2 className="post-title">
        SSR with{' '}
        <a href="https://github.com/facebook/create-react-app">
          create-react-app
        </a>
      </h2>

      <p className="post-meta">
        By{' '}
        <a className="post-author" href="https://github.com/AElouai">
          Ali Elouai
        </a>{' '}
        why{' '}
        <a className="post-category post-category-yui">
          why not ! i hate ejecting every time i have to customise my app
        </a>
      </p>
    </header>

    <div className="post-description">
      <p>
        We are happy to announce the release of CRA_SSR You can find it now on
        the NPM! or download it directly via Github, or pull it via git. We’ve
        also updated documentation.
      </p>
    </div>
  </section>
);

export default Home;
