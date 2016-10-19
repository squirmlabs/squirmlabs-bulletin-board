import axios from 'axios';

import * as ActionTypes from '../constants/ActionTypes';
import * as APIEndpoints from '../constants/Endpoints';

export function fetchRequests() {
  return (dispatch) => axios.get('http://localhost:8085/api/instagram')
  .then(res => dispatch({
    type: ActionTypes.FETCH_REQUESTS,
    payload: res
  }));
}

export function instagramSearchTags(search) {
  return (dispatch) => axios.get(`${APIEndpoints.API_HOST}${APIEndpoints.URI_TAGS}${search}`)
  .then(results => dispatch({
    type: ActionTypes.IG_SEARCH_TAGS,
    payload: results
  }));
}

// create array of cached searches
