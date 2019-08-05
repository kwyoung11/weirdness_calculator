import { UPDATE_SEARCH_TERM } from '../actions/searchTerm-actions';

export default function searchTermReducer(state = "", {type, payload}) {
	switch(type) {
		case UPDATE_SEARCH_TERM:
			return payload.searchTerm;
		default:
			return state;
	}
}