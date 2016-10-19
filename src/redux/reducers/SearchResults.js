import * as ActionTypes from '../constants/ActionTypes';

const INITIAL_STATE = { results: [] };

const actionsMap = {
  [ActionTypes.IG_SEARCH_TAGS](state, action) {
    console.log('IG_SEARCH_TAGS action', action.payload)
    return {
      ...state, results: [
        {
          cards: action.payload.data.data
        },
        {
          pagination:
            action.payload.data.pagination,

        },
        {
          response_code:
            action.payload.data.meta.code,

        },
      ]
    };
  }
}

export default function requests(state = INITIAL_STATE, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
