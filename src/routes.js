import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from './App';
import ResultPage from './components/ResultPage';

const AppRouter = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/result' component={ResultPage} />
    </div>
  </Router>
);

export default AppRouter;