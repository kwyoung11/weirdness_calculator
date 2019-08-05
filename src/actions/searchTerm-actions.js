import { updateSearchResult } from './searchResult-actions';

export const UPDATE_SEARCH_TERM = 'searchTerm:updateSearchTerm';

const API_KEY = "6rQaAEtoTt4TaxuglzLygYtoAn4VsWgp";
const SEARCH_ENDPOINT = "http://api.giphy.com/v1/gifs/translate";

export function updateSearchTerm(newSearchTerm) {
	return {
		type: UPDATE_SEARCH_TERM,
		payload: {
			searchTerm: newSearchTerm
		}
	}
}

export function apiRequest(callback) {
	return (dispatch, getState) => {
		const { searchTerm, weirdness } = getState();
		fetch(SEARCH_ENDPOINT + `?s=${searchTerm}&weirdness=${weirdness}&api_key=${API_KEY}`)
		.then(res => res.json())
		.then(({data}) => {
			if (data.status != 200) {
				callback({status: "error", msg: data.msg});
			} else {
				callback({status: "success", msg: data.msg});
			}
			dispatch(updateSearchResult(data, weirdness));
		});
	}
}