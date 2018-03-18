import React, {Component} from 'react';
import {BrowserRouter, View} from '../routes'
import './index.css';
import SideBar from '../components/sidebar';
import Footer from '../components/footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="pure-g">
                    <div id="layout" className="pure-g">
                        <SideBar />
                        <div className="content pure-u-1 pure-u-md-3-4">
                            <View />
                            <Footer/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
