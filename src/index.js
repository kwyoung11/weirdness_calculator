import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Routes from './routes';

import likedGifsReducer from './reducers/likedGifs-reducer';
import weirdnessReducer from './reducers/weirdness-reducer';
import searchTermReducer from './reducers/searchTerm-reducer';
import searchResultReducer from './reducers/searchResult-reducer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const allReducers = combineReducers({
	likedGifs: likedGifsReducer,
	weirdness: weirdnessReducer,
	searchTerm: searchTermReducer,
	searchResult: searchResultReducer
});

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<Routes />
  	</Provider>, 
	document.getElementById('root')
);
