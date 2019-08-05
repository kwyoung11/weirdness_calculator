import React from 'react';
import { Gif } from './Gif';
import { Container } from 'reactstrap';

export const GifList = (props) => {
	const gifs = () => {
		return props.gifs.map(gif => {
			return (
				<li>
					<h5>{gif.title}</h5>
					<Gif onUnlikeGif={props.onUnlikeGif} height="250" width="250" gif={gif} />
					{props.includeWeirdness ? <div className="GifList__weirdness">{gif.weirdness}/10</div> : ""}
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