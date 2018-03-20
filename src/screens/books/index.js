import React, { Component } from 'react';
import Post from '../../components/post';
import { connect } from 'react-redux';

class Books extends Component {

  render() {
      console.log('this.props.books', this.props.books);
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

const mapStateToProps = state => ({
  books: state.books.lists,
});
export default connect(mapStateToProps)(Books);
