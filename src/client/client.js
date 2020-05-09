// starting point of client React application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
(
<Provider store={store}><BrowserRouter>
    <Routes />
</BrowserRouter></Provider>), document.getElementById('root'));