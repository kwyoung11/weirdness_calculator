import React from 'react';
import { Button } from 'reactstrap';

export const Gif = (props) => {
	const unLikeable = props.onUnlikeGif ? <Button close><span data-gif={JSON.stringify(props.gif)} onClick={e => props.onUnlikeGif(e)} aria-hidden="true">X</span></Button> : null;
	return (
		<section className="Gif">
			<img width={props.width} height={props.width} 
			src={props.gif.url} alt={props.gif.title} />
			{unLikeable}
		</section>
	);
}