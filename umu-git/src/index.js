import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import GitApp from './container/GitApp';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>
        <GitApp />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
