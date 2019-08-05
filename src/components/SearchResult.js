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
			<button>LIKE GIF</button>
			<div>
				<label htmlFor="weirdness">Weirdness</label>
        		<input type="range" defaultValue="0" name="weirdness"
         		min="0" max="10"/>
         	</div>
	    </Container>
	);
}