import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux
import {Provider} from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {myFirstReducer} from './reducer';
import createSagaMiddleware from 'redux-saga'
import {mySaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ myFirstReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
