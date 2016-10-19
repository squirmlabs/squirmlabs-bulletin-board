import * as ActionTypes from '../constants/ActionTypes';

const INITIAL_STATE = { all: [], request: null };

const actionsMap = {
  [ActionTypes.FETCH_REQUESTS](state, action) {
    console.log('FETCH_REQUESTS action', action.payload)
    return { ...state, all: action.payload };
  },
  [ActionTypes.FETCH_REQUEST](state, action) {
    console.log('FETCH_REQUEST action.payload', action.payload)
    return { ...state, request: action.payload };
  },
};

export default function requests(state = INITIAL_STATE, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
