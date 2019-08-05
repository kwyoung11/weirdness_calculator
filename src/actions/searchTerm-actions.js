import { updateSearchResult } from './searchResult-actions';

export const UPDATE_SEARCH_TERM = 'searchTerm:updateSearchTerm';

export function updateSearchTerm(newSearchTerm) {
	return {
		type: UPDATE_SEARCH_TERM,
		payload: {
			searchTerm: newSearchTerm
		}
	}
}