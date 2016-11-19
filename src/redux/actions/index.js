import axios from 'axios';

import * as ActionTypes from '../constants/ActionTypes';
import * as APIEndpoints from '../constants/Endpoints';

export const requestSearchResults = () => ({
  type: 'REQUEST_SEARCH_RESULTS',
})

export const recieveSearchResults = (response) => {

  console.log('RESPONSE', response)
  return {
    type: 'RECIEVE_SEARCH_RESULTS',
    response,
  }
}

export const fetchInstagramTags = (search) => (dispatch) => {
  dispatch(requestSearchResults);

  return axios.get(`${APIEndpoints.API_HOST}${APIEndpoints.URI_TAGS}${search}`)
  .then(results => {
    dispatch(recieveSearchResults(results));
  });
};
// export const fetchInstagramTags = (search) => (dispatch) => {
//   dispatch(requestSearchResults);
//
//   return axios.get(`${APIEndpoints.API_HOST}${APIEndpoints.URI_TAGS}${search}`)
//   .then(results => dispatch({
//     type: ActionTypes.IG_SEARCH_TAGS,
//     payload: results
//   }));
// }

// create array of cached searches
