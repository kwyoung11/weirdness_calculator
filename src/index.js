import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
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

const allStoreEnhancers = compose(
	applyMiddleware(thunk)
);

const store = createStore(
	allReducers, 
	allStoreEnhancers
);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
  	</Provider>, 
	document.getElementById('root')
);
