export const UPDATE_SEARCH_RESULT = "searchResult:updateSearchResult";
export const CLEAR_SEARCH_RESULT = "searchResult:clearSearchResult";

export function updateSearchResult(data, meta, weirdness) {
	return {
		type: UPDATE_SEARCH_RESULT,
		payload: {
			searchResult: {
				id: data.id,
				title: data.title,
				url: data.images ? data.images.downsized_medium.url : undefined,
				weirdness: weirdness,
				meta: meta
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