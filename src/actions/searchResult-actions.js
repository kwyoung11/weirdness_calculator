export const UPDATE_SEARCH_RESULT = "searchResult:updateSearchResult";
export const CLEAR_SEARCH_RESULT = "searchResult:clearSearchResult";

export function updateSearchResult(newSearchResult, weirdness) {
	return {
		type: UPDATE_SEARCH_RESULT,
		payload: {
			searchResult: {
				id: newSearchResult.id,
				title: newSearchResult.title,
				url: newSearchResult.images.downsized_medium.url,
				weirdness: weirdness
			}
		}
	}
}

export function clearSearchResult() {
	return {
		type: UPDATE_SEARCH_RESULT,
		payload: {
			searchResult: {}
		}
	}
}