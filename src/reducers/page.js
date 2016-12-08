import { 
  ADD_POST,
  ADD_COMMENT,
  LOGIN_SUCCES
} from '../constants/Page'

const initialState = {
  user: '',
  text: ''
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case LOGIN_SUCCES:
      return { ...state, user: action.payload }

    case ADD_POST:
      return { ...state, user: state.user, text: action.payload }

    case ADD_COMMENT:
      return { ...state, user: action.payload.user, text: action.payload.text }

    default:
      return state;
  }

}