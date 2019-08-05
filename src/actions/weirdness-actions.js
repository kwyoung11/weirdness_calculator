export const UPDATE_WEIRDNESS = 'weirdness:updateWeirdness'

export function updateWeirdness(newWeirdness) {
	return {
		type: UPDATE_WEIRDNESS,
		payload: {
			weirdness: newWeirdness
		}
	}
}