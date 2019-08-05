import { UPDATE_WEIRDNESS } from '../actions/weirdness-actions';

export default function weirdnessReducer(state = 0, {type, payload}) {
	switch(type) {
		case UPDATE_WEIRDNESS:
			return parseInt(payload.weirdness);
		default:
			return state;
	}
}