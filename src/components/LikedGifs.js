import React from 'react';
import { Gif } from './Gif';
import { GifList } from './GifList';
import { Link } from 'react-router-dom';

export const LikedGifs = (props) => {
	const likeGifsLength = props.likedGifs.length;
	const helperText = 5 - likeGifsLength > 0 ? `You must like ${5 - likeGifsLength} more gif(s) to calculate your score` : "";
	return (
		<React.Fragment>
			<h5> YOUR LIKED GIFS </h5>
			<div>
				<GifList gifs={props.likedGifs} />
			</div>
			
			
				<Link to={{
					pathname: "/result",
					state: {gifs: props.likedGifs}
					}}>
					<button ref={props.calculateWeirdnessButton} disabled>
						CALCULATE MY WEIRDNESS SCORE
					</button>
				</Link>
			
			<div>
				<b>{helperText}</b>
			</div>
		</React.Fragment>
	);
}