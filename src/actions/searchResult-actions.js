export const UPDATE_SEARCH_RESULT = "searchResult:updateSearchResult";

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