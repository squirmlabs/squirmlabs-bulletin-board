import jsonp from 'jsonp';
// search for 'frog'

import {
  SEARCH_INSTAGRAM, INVALIDATE_INSTAGRAM,
  REQUEST_TAG, RECEIVE_RESULTS
} from './types';

import {
  INSTAGRAM_API_TAGS,
} from './endpoints';

export const searchInstagram = instagram => ({
  type: SEARCH_INSTAGRAM,
  instagram
})

export const invalidateinstagram = instagram => ({
  type: INVALIDATE_INSTAGRAM,
  instagram
})

export const requestTag = instagram => ({
  type: REQUEST_TAG,
  instagram
})

export const receiveResults = (instagram, json) => ({
  type: RECEIVE_RESULTS,
  instagram,
  results: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

const fetchResults = instagram => dispatch => {
  dispatch(requestTag(instagram))
  fetch(INSTAGRAM_API_TAGS, {
    mode: 'no-cors'
  }).then(function(response) {
    console.log(response.body); // "opaque"
  });
  // return fetch(`https://www.instagram.com/r/${instagram}.json`)
  //   .then(response => response.json())
  //   .then(json => dispatch(receiveResults(instagram, json)))
}

const shouldFetchResults = (state, instagram) => {
  const results = state.resultsByinstagram[instagram]
  if (!results) {
    return true
  }
  if (results.isFetching) {
    return false
  }
  return results.didInvalidate
}

export const fetchResultsIfNeeded = instagram => (dispatch, getState) => {
  if (shouldFetchResults(getState(), instagram)) {
    return dispatch(fetchResults(instagram))
  }
}
