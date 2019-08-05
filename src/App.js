import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { SearchResult } from './components/SearchResult';

import { apiRequest } from './actions/searchTerm-actions';
import { updateWeirdness } from './actions/weirdness-actions';
import { updateSearchTerm } from './actions/searchTerm-actions';
import { likeGif, unlikeGif } from './actions/likedGifs-actions';

import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	searchTerm: props.searchTerm
    };

    this.onUpdateWeirdness = this.onUpdateWeirdness.bind(this);
    this.onLikeGif = this.onLikeGif.bind(this);
    this.onUnlikeGif = this.onUnlikeGif.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

  handleSearchTermChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSearchTermSubmit(e) {
    e.preventDefault();
    this.props.onUpdateSearchTerm(this.state.searchTerm);
    this.props.onApiRequest();
  }

  onUpdateWeirdness(e) {
    this.props.onUpdateWeirdness(e.target.value);
  }

  onLikeGif(e) {
    this.props.onLikeGif(JSON.parse(e.target.getAttribute("data-gif")));
  }

  onUnlikeGif(e) {
    // TODO
  }

  render() {
    return (
    	<React.Fragment>
	    	<Header />
	    	<Container fluid>
	      		<Row>
	            	<Col xs="6">
	            		<Search 
	            			handleSearchTermSubmit={this.handleSearchTermSubmit} 
                			handleSearchTermChange={this.handleSearchTermChange}/>
	            		<SearchResult 
	            			weirdness={this.props.weirdness}
	            			onLikeGif={this.onLikeGif}
	            			searchResult={this.props.searchResult}
                			onUpdateWeirdness={this.onUpdateWeirdness}/>
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

const mapStateToProps = (state, props) => {
  return {
    likedGifs: state.likedGifs,
    weirdness: state.weirdness,
    searchTerm: state.searchTerm,
    searchResult: state.searchResult
  };
  
};

const mapActionsToProps = {
  onUpdateWeirdness: updateWeirdness,
  onUpdateSearchTerm: updateSearchTerm,
  onApiRequest: apiRequest,
  onLikeGif: likeGif,
  onUnlikeGif: unlikeGif
};

export default connect(mapStateToProps, mapActionsToProps)(App);
