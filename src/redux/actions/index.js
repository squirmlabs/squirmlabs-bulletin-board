import axios from 'axios';

import * as ActionTypes from '../constants/ActionTypes';
import * as APIEndpoints from '../constants/Endpoints';

export const requestedPosts = () => ({
  type: ActionTypes.REQUESTED_POSTS,
})

export const createdPost = () => ({
  type: ActionTypes.CREATED_POST,
})

export const fetchedPost = () => ({
  type: ActionTypes.FETCHED_POST,
})

export const deletedPost = () => ({
  type: ActionTypes.DELETED_POST,
})

export const recievedPosts = (response) => {
  return {
    type: ActionTypes.RECIEVED_POSTS,
    response,
  }
}

export const recievedPost = (response) => {
  console.log('RESPONSE', response)
  return {
    type: ActionTypes.RECIEVED_POST,
    response,
  }
}
export const deleted = (response) => {
  return {
    type: ActionTypes.DELETED,
    response,
  }
}

export const requestPosts = () => (dispatch) => {
  dispatch(requestedPosts);
  return axios.get(`${APIEndpoints.POSTS_URL}${APIEndpoints.KEY}`)
  .then(results => {
    dispatch(recievedPosts(results));
  });
};

export const createPost = (props) => (dispatch) => {
  dispatch(createdPost);
  return axios.post(`${APIEndpoints.POSTS_URL}${APIEndpoints.KEY}`, props);
};


export const fetchPost = (id) => (dispatch) => {
  dispatch(fetchedPost);
  return axios.get(`${APIEndpoints.POSTS_URL}/${id}${APIEndpoints.KEY}`)
  .then(results => {
    dispatch(recievedPost(results));
  });
}

export const deletePost = (id) => (dispatch) => {
  dispatch(deletedPost);
  return axios.delete(`${APIEndpoints.POSTS_URL}/${id}${APIEndpoints.KEY}`)
  .then(results => {
    dispatch(deleted(results));
  });
}