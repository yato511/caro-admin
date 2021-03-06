import { GAME_ACTION_TYPES } from "@/constants/actionTypes";

const initialState = {
	list: [],
	shouldRefresh: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GAME_ACTION_TYPES.FETCH_GAME_LIST:
			return {
				...state,
				list: payload.games,
			};

		case GAME_ACTION_TYPES.REFRESH_GAME_LIST:
			return {
				...state,
				shouldRefresh: new Date().getTime(),
			};
		default:
			return state;
	}
};
