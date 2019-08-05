import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Header } from './components/Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    	<React.Fragment>
      		<Header />
      	</React.Fragment>
    );  
  }
  
}

export default connect()(App);
