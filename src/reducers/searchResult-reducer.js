import { UPDATE_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from '../actions/searchResult-actions';
import { updateSearchResult, clearSearchResult } from '../actions/searchResult-actions';

export default function searchResultReducer(state = {}, {type, payload}) {
	switch(type) {
		case UPDATE_SEARCH_RESULT:
			return payload.searchResult;
		case CLEAR_SEARCH_RESULT:
			return payload.searchResult;
		default:
			return state;
	}
}