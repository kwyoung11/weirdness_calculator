import React from 'react';
import { Container } from 'reactstrap';

export const SearchResult = (props) => {

	return (
		<Container className="SearchResult">
			<h2>YOUR RESULT</h2>
			<div className="SearchResult__image">
				<h5>TITLE</h5>
				<div>IMAGE</div>
			</div>
			<button onClick={e => props.onLikeGif(e)}>LIKE GIF</button>
			<div>
        		<input type="range" defaultValue="0" onChange={e => props.onUpdateWeirdness(e)} name="weirdness"
         		min="0" max="10"/>
         		<label htmlFor="weirdness">Weirdness</label>: {props.weirdness}
         	</div>
	    </Container>
	);
}