import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { store } from './store';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';

ReactDOM.render(

    <Provider store={store}>
        <Dashboard  />
      </Provider>,
    
       document.getElementById('root'));
    registerServiceWorker();
    
