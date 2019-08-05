import React from 'react';
import { Gif } from './Gif';
import { Container } from 'reactstrap';

export const GifList = (props) => {
	const gifs = () => {
		return props.gifs.map(gif => {
			return (
				<li>
					<h5>{gif.title}</h5>
					<Gif height="250" width="250" gif={gif} />
				</li>
			);
		});	
	} 
	return (
		<Container className="GifList">
			<ul>
				{gifs()}
			</ul>
		</Container>
	);
};