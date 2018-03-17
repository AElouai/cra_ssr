import React, {Component} from 'react';
import SideBar from '../../components/sidebar';
import Footer from '../../components/footer';
import Post from '../../components/post';

const baseUrl = 'https://ghibliapi.herokuapp.com/';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    const url = baseUrl + 'films';
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
          this.setState({ films: data });
          console.log('Data : ', data);
        },
        error => {
          //in case we can't have Data form server we use local DATA
          console.log('error : ', error);
        },
      );
  }

  render() {
    const param = this.props.match.params.param;
    return (
      <div className="pure-g">
        <div id="layout" className="pure-g">
          <SideBar />

          <div className="content pure-u-1 pure-u-md-3-4">
            <div className="posts">
              <h1 className="content-subhead">Films List from <a>https://ghibliapi.herokuapp.com/#tag/Films</a></h1>
              {this.state.films.map((item, index) => {
                return (
                  <Post key={index} {...item} />
                );
              })}
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
