export const LIKE_GIF = 'likedGifs:likeGif'
export const UNLIKE_GIF = 'likedGifs:unlikeGif'

export function likeGif(gif) {
	return {
		type: LIKE_GIF,
		payload: {
			gif: gif
		}
	}
}

export function unlikeGif(gif) {
	return {
		type: UNLIKE_GIF,
		payload: {
			gif: gif
		}
	}
}