import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import {
    render
} from 'react-dom'
import Root from './routes'
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker'


render( <
    Root /> ,
    document.getElementById('root')
);
registerServiceWorker();