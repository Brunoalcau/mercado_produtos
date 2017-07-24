import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './store/reducers';
import thunk from 'redux-thunk';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
