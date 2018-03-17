import React, {Component} from 'react';
import './index.css';
import logo from './logo.svg';
import {BrowserRouter, View} from '../routes'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to Create React App With Server Side Rendering </h1>
                    </header>
                    <p className="App-intro">
                        <View />
                    </p>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
