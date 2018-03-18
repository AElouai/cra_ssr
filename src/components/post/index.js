import React from 'react';

const Post = props => (
  <section className="post">
    <header className="post-header">
      <a className="post-title" href={`/movies/${props.id}`}>{props.title}</a>

      <p className="post-meta">
        By <a className="post-author">{props.director}</a> producer{' '}
        <a className="post-category post-category-js">{props.producer}</a>{' '}
        Rating <a className="post-author">{props.rt_score} %</a>
      </p>
    </header>

    <div className="post-description">
      <p>{props.description}</p>
    </div>
  </section>
);

export default Post;
