import React, { Component } from 'react';
import Post from '../../components/post';
import { connect } from 'react-redux';
import { addMovies } from '../../redux/actions/movies';

const baseUrl = 'https://ghibliapi.herokuapp.com/films';

class Movies extends Component {
  getData() {
    const param = this.props.match.params.param;
    const url = param ? `${baseUrl}/${param}` : baseUrl;
    if (this.props.films.length === 0)
      fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      })
        .then(response => response.json())
        .then(
          data => {
            this.props.addMovies(data);
            console.log('Data : ', data);
          },
          error => {
            //in case we can't have Data form server we use local DATA
            console.log('error : ', error);
          },
        );
  }

  render() {
    console.log('this.props.films', this.props.films);
    if (this.props.films.length === 0) this.getData();

    return (
      <div className="posts">
        <h1 className="content-subhead">
          Films List from <a>https://ghibliapi.herokuapp.com/#tag/Films</a>
        </h1>
        {this.props.films &&
          this.props.films.map((item, index) => {
            return <Post key={index} {...item} />;
          })}
      </div>
    );
  }
}

const mapDispatchToProps = { addMovies };

const mapStateToProps = state => ({
  films: state.movies.lists,
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
