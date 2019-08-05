import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { SearchResult } from './components/SearchResult';

import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    	<React.Fragment>
	    	<Header />
	    	<Container fluid>
	      		<Row>
	            	<Col xs="6">
	            		<Search />
	            		<SearchResult />
	            	</Col>
	            	<Col xs="6">
	            		LIKED GIFS
	            	</Col>
	            </Row>
	      	</Container>
      	</React.Fragment>
    );  
  }
  
}

export default connect()(App);
