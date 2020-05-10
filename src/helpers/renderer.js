import React from 'react';
import { renderToString } from 'react-dom/server';
//import Home from '../client/components/Home';

import { StaticRouter } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';


import Routes from '../client/Routes';

import { Provider } from 'react-redux';



export default (req,store) => {



    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>

    );

    return `
    <html>
        <head></head>
        <body>
           <div id="root">${content}</div>
           <script>
            window.INITIAL_DATA = ${JSON.stringify(store.getState())}
           </script>
            <script src="bundle.js"></script>
        </body>  
    </html>`

}