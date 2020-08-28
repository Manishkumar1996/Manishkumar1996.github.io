// External Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

// My Imports
import store from './store';
import App from './App';

import './scss/main.scss';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);