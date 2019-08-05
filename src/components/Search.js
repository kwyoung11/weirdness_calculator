import React from 'react';
import { Container } from 'reactstrap';

export class Search extends React.Component {
	constructor(props) {
		super(props);
	}

  	render () {
  		return (
			<Container className="Search">
				<div>
					<p>
		    	  	  Find out how weird you are by selecting the GIFs that make you laugh.
		    	  	  We'll show you the least weird ones to start, but you can move the slider to make them weirder.
		    	  	</p>
		    	  	<p>
		    	  	  When you find a GIF you like, press the <i>Like</i> button. Once you like 5 GIFs, we'll show you how weird you are.
		    	  	</p>
				</div>
				<form id="searchForm">
		    	  <label htmlFor="searchTerm">Search Term</label>
		    	  <input type="text" name="searchTerm" />
		    	  <button type="submit">Search</button>
		    	</form>
		    </Container>
		);	
  	}
	
}