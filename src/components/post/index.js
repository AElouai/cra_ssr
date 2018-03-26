// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../../redux/actions/movies';

class Post extends Component {
  addToFavorite = item => {
    this.props.addFavorite(item);
  };

  render() {
    return (
      <section className="post">
        <header className="post-header">
          <img
            onClick={() =>
              this.addToFavorite({
                title: this.props.title,
                id: this.props.id,
              })}
            width="48"
            height="48"
            alt="Tilo Mitra's avatar"
            className="post-avatar"
            src="/img/Favorite.jpeg"
          />
          <a className="post-title" href={`/movies/${this.props.id}`}>
            {this.props.title}
          </a>
          <p className="post-meta">
            By <a className="post-author">{this.props.director}</a> producer{' '}
            <a className="post-category post-category-js">
              {this.props.producer}
            </a>{' '}
            Rating <a className="post-author">{this.props.rt_score} %</a>
          </p>
        </header>

        <div className="post-description">
          <p>{this.props.description}</p>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFavorite }, dispatch);

export default connect(null, mapDispatchToProps)(Post);
