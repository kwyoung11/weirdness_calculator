import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';

const reducer = () => {
	return 'TODO';
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
  	</Provider>, 
	document.getElementById('root')
);
