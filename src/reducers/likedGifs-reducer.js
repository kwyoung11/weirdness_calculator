import { LIKE_GIF, UNLIKE_GIF } from '../actions/likedGifs-actions';
import { likeGif, unlikeGif } from '../actions/likedGifs-actions';

export default function likedGifsReducer(state = [], {type, payload}) {
	switch(type) {
		case LIKE_GIF:
			return [
      		  ...state,
      		  {
      		    id: payload.gif.id,
      		    title: payload.gif.title,
      		    url: payload.gif.url
      		  }
      		];
		case UNLIKE_GIF:
			let index = state.index(payload.id);
      		return [...state.slice(0, index), ...state.slice(index + 1)]
		default:
			return state;
	}
}