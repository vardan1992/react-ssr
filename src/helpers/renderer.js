import React from 'react';
import { renderToString } from 'react-dom/server';
//import Home from '../client/components/Home';

import { StaticRouter } from 'react-router-dom';

import Routes from '../client/Routes';

import { Provider } from 'react-redux';
import createStore from './createStore';

export default (req) => {

    const store = createStore();


    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>

    );

    return `
    <html>
        <head></head>
        <body>
           <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>  
    </html>`

}