import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createStore } from 'no-redux';
import { actionData } from './actions';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={createStore(actionData, { todos: []})}>
    <App />
  </Provider>,
  document.getElementById('root')
);
