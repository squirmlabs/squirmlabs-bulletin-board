// import { combineReducers } from 'redux';
// import results from './results';
//
// export default combineReducers({
//   results,
// });


import { combineReducers } from 'redux'
import {
  SEARCH_INSTAGRAM, INVALIDATE_TAG,
  REQUEST_TAG, RECEIVE_RESULTS
} from '../actions/types'

const searchInstagram = (state = null, action) => {
  switch (action.type) {
    case SEARCH_INSTAGRAM:
      return action.tag
    default:
      return state
  }
}

const results = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_TAG:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_TAG:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_RESULTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.results,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const tagsByInstagram = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_TAG:
    case RECEIVE_RESULTS:
    case REQUEST_TAG:
      return {
        ...state,
        [action.reddit]: results(state[action.reddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  tagsByInstagram,
  searchInstagram
})

export default rootReducer
