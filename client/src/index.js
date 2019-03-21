import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {isMobile} from 'react-device-detect';


const NotSupported = () => ( <div>Game is available only for Mobile devices</div>)

ReactDOM.render(isMobile? <App /> : <NotSupported/>, document.getElementById('root'));
registerServiceWorker();
