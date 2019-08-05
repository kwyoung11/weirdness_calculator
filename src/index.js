import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Routes from './routes';

import likedGifsReducer from './reducers/likedGifs-reducer';
import weirdnessReducer from './reducers/weirdness-reducer';
import searchTermReducer from './reducers/searchTerm-reducer';
import searchResultReducer from './reducers/searchResult-reducer';

const allReducers = combineReducers({
	likedGifs: likedGifsReducer,
	weirdness: weirdnessReducer,
	searchTerm: searchTermReducer,
	searchResult: searchResultReducer
});

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
  	</Provider>, 
	document.getElementById('root')
);
