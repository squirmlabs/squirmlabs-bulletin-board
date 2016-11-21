import * as ActionTypes from '../constants/ActionTypes';

const INITIAL_STATE = { posts: [], post: null };

const actionsMap = {
  [ActionTypes.RECIEVED_POSTS](state, action) {
    return action.response.data;
  },
  [ActionTypes.RECIEVED_POST](state, action) {
    return {
      ...state, post: action.response.data,
    }
  },
}

export default function posts(state = INITIAL_STATE, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
