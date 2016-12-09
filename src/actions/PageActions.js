import {
  ADD_POST,
  ADD_COMMENT
} from '../constants/Page'

export function addPost(post) {

  return (dispatch) => {
    dispatch({
      type: ADD_POST,
      payload: post
    })
   
  }
}

export function addComment(data) {

  return (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
      payload: data
    })
   
  }
}