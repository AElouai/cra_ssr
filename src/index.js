import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Containers from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Containers />, document.getElementById('root'));
registerServiceWorker();
