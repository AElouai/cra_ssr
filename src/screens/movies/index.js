import React, {Component} from 'react';
import Post from '../../components/post';

const baseUrl = 'https://ghibliapi.herokuapp.com/films';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }

  componentWillMount() {
    const param = this.props.match.params.param;
    const url = param ? `${baseUrl}/${param}` : baseUrl;
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
            if(param){
                this.setState({ films: [data] });
            }else{
                this.setState({ films: data });
            }
          console.log('Data : ', data);
        },
        error => {
          //in case we can't have Data form server we use local DATA
          console.log('error : ', error);
        },
      );
  }

  render() {
    return (
      <div className="posts">
        <h1 className="content-subhead">
          Films List from <a>https://ghibliapi.herokuapp.com/#tag/Films</a>
        </h1>
        {this.state.films.map((item, index) => {
          return <Post key={index} {...item} />;
        })}
      </div>
    );
  }
}
export default Movies;
