import React from 'react';
import { connect } from 'react-redux';

const ResultPage = (props) => {
	return (
		<div> TODO ResultPage </div>
	);
}

const mapStateToProps = (state, props) => ({
	likedGifs: state.likedGifs
});

export default connect(mapStateToProps)(ResultPage);