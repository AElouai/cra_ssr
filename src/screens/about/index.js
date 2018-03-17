import React, { Component } from 'react';

class About extends Component {
    render() {
        const param = this.props.match.params.param;
        return (
            <div >
                <p className="App-intro">
                    About Page
                    {param && <b> this Page has param : {param}</b>}
                </p>
            </div>
        );
    }
}
export default About;
