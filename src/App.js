import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { SearchResult } from './components/SearchResult';
import { LikedGifs } from './components/LikedGifs';

import { apiRequest } from './actions/searchTerm-actions';
import { updateWeirdness } from './actions/weirdness-actions';
import { updateSearchTerm } from './actions/searchTerm-actions';
import { clearSearchResult } from './actions/searchResult-actions';
import { likeGif, unlikeGif } from './actions/likedGifs-actions';

import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	searchTerm: props.searchTerm,
      toolTipOpen: false,
      loadingIndicatorRunning: false
    };

    this.onUpdateWeirdness = this.onUpdateWeirdness.bind(this);
    this.onLikeGif = this.onLikeGif.bind(this);
    this.onUnlikeGif = this.onUnlikeGif.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);

    this.searchInput = React.createRef();
    this.searchButton = React.createRef();
    this.likeGifButton = React.createRef();
    this.calculateWeirdnessButton = React.createRef();
  }

  handleSearchTermChange(e) {
    this.setState({
      searchTerm: e.target.value,
      toolTipOpen: false
    });
  }

  handleSearchTermSubmit(e) {
    e.preventDefault();
    this.setState({
      loadingIndicatorRunning: true
    });
    this.props.onUpdateSearchTerm(this.state.searchTerm);
    this.props.onApiRequest((response) => {
      this.setState({
        loadingIndicatorRunning: false
      });
    });
    this.likeGifButton.current.removeAttribute("disabled");
  }

  onUpdateWeirdness(e) {
    this.props.onUpdateWeirdness(e.target.value);
  }

  onLikeGif(e) {
    this.props.onLikeGif(JSON.parse(e.target.getAttribute("data-gif")));
    this.props.onClearSearchResult();
    this.likeGifButton.current.setAttribute("disabled", "disabled");
    this.searchInput.current.focus();
    this.searchInput.current.value = "";
    this.setState({
      toolTipOpen: this.props.likedGifs.length + 1 != 5
    });
    if (this.props.likedGifs.length + 1 == 5) {
      this.searchButton.current.setAttribute("disabled", "disabled");
      this.calculateWeirdnessButton.current.removeAttribute("disabled");
      this.searchInput.current.blur();
    }
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
                			handleSearchTermChange={this.handleSearchTermChange}
                      searchInput={this.searchInput}
                      toolTipOpen={this.state.toolTipOpen}
                      searchButton={this.searchButton} />
	            		<SearchResult 
	            			weirdness={this.props.weirdness}
	            			onLikeGif={this.onLikeGif}
	            			searchResult={this.props.searchResult}
                    likeGifButton={this.likeGifButton}
                		onUpdateWeirdness={this.onUpdateWeirdness}
                    loadingIndicatorRunning={this.state.loadingIndicatorRunning} />
	            	</Col>
	            	<Col xs="6">
	            		<LikedGifs
                    likedGifs={this.props.likedGifs}
                    calculateWeirdnessButton={this.calculateWeirdnessButton} />
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
  onUnlikeGif: unlikeGif,
  onClearSearchResult: clearSearchResult
};

export default connect(mapStateToProps, mapActionsToProps)(App);
