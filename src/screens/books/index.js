import React, { Component } from 'react';
import Post from '../../components/post';
import { connect } from 'react-redux';
import { addBooks } from '../../redux/actions/books';
import { getBooks } from '../../rest';

const baseUrl = '/api/books';
class Books extends Component {

  // getData() {
  //   const param = this.props.match.params.param;
  //   const url = param ? `${baseUrl}/${param}` : baseUrl;
	// getBooks().then(data => {
  //   console.log("Data : ", data);
  //   // this.props.addBooks(data);
  // });
  // }

  // componentDidMount(){
  //   console.log('componentDidMount')   
  //   this.getData();
  // }

  render() {
    // if (this.props.books && this.props.books.length === 0) this.getData();

    return <div className="posts">
        <h1 className="content-subhead">
          Fiction books List from <a>SomeWhere</a>
        </h1>
        {this.props.books && this.props.books.map((item, index) => {
          return <Post key={index} {...item} />;
        })}
      </div>;
  }
}
const mapDispatchToProps = { addBooks };

const mapStateToProps = state => ({
  books: state.books.lists,
});
export default connect(mapStateToProps, mapDispatchToProps)(Books);
