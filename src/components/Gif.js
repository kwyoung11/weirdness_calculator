import React from 'react';

export const Gif = (props) => {
	return (<img width={props.width} height={props.width} src={props.gif.url} />);
}