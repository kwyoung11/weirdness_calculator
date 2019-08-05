import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { SearchResult } from './components/SearchResult';

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
  }

  onUpdateWeirdness(e) {
    this.props.onUpdateWeirdness(e.target.value);
  }

  onLikeGif(e) {
    // TODO
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
  onLikeGif: likeGif,
  onUnlikeGif: unlikeGif
};

export default connect(mapStateToProps, mapActionsToProps)(App);
