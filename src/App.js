import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>TODO</div>
    );  
  }
  
}

export default connect()(App);
