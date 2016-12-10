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

export function addComment(comment) {

  return (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
      payload: comment
    })

  }
}