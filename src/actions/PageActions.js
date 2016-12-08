import {
  ADD_POST,
  ADD_COMMENT
} from '../constants/Page'

export function addPost(text) {

  return (dispatch) => {
    dispatch({
      type: ADD_POST,
      payload: text
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