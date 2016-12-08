import {
  LOGIN_REQUEST,
  LOGIN_SUCCES,
  LOGIN_FAIL
} from '../constants/User'

export function handleLogin(username) {
  const randomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  return function(dispatch) {

    dispatch({
      type: LOGIN_REQUEST
    })

    if (randomInteger(-1,1)) {
      setTimeout(() => {
        dispatch({
          type: LOGIN_SUCCES,
          payload: username
        })
      }, 1000)
    } else {
      setTimeout(() => {
        dispatch({
          type: LOGIN_FAIL,
          payload: {'message': 'Something happend'}
        })
      }, 1000)
    }
  }

}