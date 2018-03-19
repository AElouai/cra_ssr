import React, { Component } from 'react';
import { View } from '../routes';
import './index.css';
import SideBar from '../components/sidebar';
import Footer from '../components/footer';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('favorites', this.props.favorites);
    return (
      <div className="pure-g">
        <div id="layout" className="pure-g">
          <SideBar favorites={this.props.favorites} />
          <div className="content pure-u-1 pure-u-md-3-4">
            <View />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.movies.favorites,
});

export default connect(mapStateToProps)(App);
