import React, { Component } from 'react';
import Post from '../../components/post';
import { connect } from 'react-redux';
import { addBooks } from '../../redux/actions/books';

const baseUrl = '/api/books';
class Books extends Component {

  getData() {
    const param = this.props.match.params.param;
    const url = param ? `${baseUrl}/${param}` : baseUrl;
    if (this.props.books.length === 0)
      fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
        .then(response => response.json())
        .then(
          data => {
            this.props.addBooks(data);
            console.log('Data : ', data);
          },
          error => {
            console.log('error : ', error);
          },
        );
  }

  render() {
    if (this.props.books.length === 0) this.getData();

    return (
      <div className="posts">
        <h1 className="content-subhead">
          Fiction books List from <a>SomeWhere</a>
        </h1>
        {this.props.books.map((item, index) => {
          return <Post key={index} {...item} />;
        })}
      </div>
    );
  }
}
const mapDispatchToProps = { addBooks };

const mapStateToProps = state => ({
  books: state.books.lists,
});
export default connect(mapStateToProps, mapDispatchToProps)(Books);
