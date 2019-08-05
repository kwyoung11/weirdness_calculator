import React from 'react';
import { GifList } from './GifList';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export const LikedGifs = (props) => {
	const likeGifsLength = props.likedGifs.length;
	const helperText = 5 - likeGifsLength > 0 ? `You must like ${5 - likeGifsLength} more gif(s) to calculate your score` : "";
	return (
		<Container className="LikedGifs">
			<h5> YOUR LIKED GIFS </h5>
			<GifList onUnlikeGif={props.onUnlikeGif} gifs={props.likedGifs} />
			
			<div className="LikedGifs__weirdness-button">
				<Link to={{
					pathname: "/result",
					state: {gifs: props.likedGifs}
					}}>
					<button ref={props.calculateWeirdnessButton} disabled>
						CALCULATE MY WEIRDNESS SCORE
					</button>
				</Link>
			</div>
			<p><b>{helperText}</b></p>
		</Container>
	);
}