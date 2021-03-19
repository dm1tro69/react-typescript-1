import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from "axios";
import combineReducers  from "./reducers";
import {Provider} from 'react-redux'
import {createStore} from "redux";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api"

const store = createStore(combineReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

