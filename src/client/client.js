// starting point of client React application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {renderRoutes} from 'react-router-config';


import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import reducers from './reducers';


const store = createStore(reducers,  window.INITIAL_DATA, applyMiddleware(thunk))

ReactDOM.hydrate(
(
<Provider store={store}><BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
</BrowserRouter></Provider>), document.getElementById('root'));