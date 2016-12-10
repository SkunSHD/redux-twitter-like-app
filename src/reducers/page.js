import {
  ADD_POST,
  ADD_COMMENT,
} from '../constants/Page'

const initialState = {
  posts: [],
  comments: []
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case ADD_POST:
      return { ...state, user: state.user, posts: [...state.posts, action.payload] }

    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] }

    default:
      return state;
  }
}