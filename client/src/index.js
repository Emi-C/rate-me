import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
