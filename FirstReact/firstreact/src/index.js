import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import '@resource/style/_style.scss';
import {Provider} from "mobx-react";
import stores from './store';

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>,
  document.getElementById('app')
);
