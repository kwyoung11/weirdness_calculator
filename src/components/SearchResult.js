import React from 'react';
import { Container } from 'reactstrap';
import { Gif } from './Gif';

export const SearchResult = (props) => {
	const renderResultOrError = () => {
		if (props.searchResult.url) {
			return (
				<Gif width="300" height="300" gif={props.searchResult}/>
			);
		} else {
			const display = <p>Please enter a search term in the box above and click Search to find a GIF.</p>
			return (
				<React.Fragment>
					{display}
				</React.Fragment>
			);
		}
	}

	return (
		<Container className="SearchResult">
			<h2>YOUR RESULT</h2>
			<div className="SearchResult__image">
				<h5>{props.searchResult.title}</h5>
				<div>{renderResultOrError()}</div>
			</div>
			<button ref={props.likeGifButton} data-gif={JSON.stringify(props.searchResult)}
			onClick={e => props.onLikeGif(e)}>LIKE GIF</button>
			<div>
        		<input type="range" defaultValue="0" onChange={e => props.onUpdateWeirdness(e)} name="weirdness"
         		min="0" max="10"/>
         		<label htmlFor="weirdness">Weirdness</label>: {props.weirdness}
         	</div>
	    </Container>
	);
}