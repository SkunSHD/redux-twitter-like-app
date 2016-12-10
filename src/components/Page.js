import React, { PropTypes, Component } from 'react'
import Post from './Page/Post'

export default class Page extends Component {

  onCurrencyBtnClick = (e) => {
    e.preventDefault()
    const postText = this.postInput.value
    const post_id = 'id_' + Math.floor(Math.random() * 100000)

    this.props.addPost({
      user: this.props.user,
      text: postText,
      post_id
    })
    this.postInput.value = ''
    this.postInput.focus()
  }

  render() {
    const { user, posts, comments, addComment } = this.props
    let formTemplate, postsAssembled

    if (user) {
      formTemplate = <form>
        <textarea
          className='add_text__textarea'
          defaultValue=''
          placeholder='Type your text here...'
          ref={(text) => { this.postInput = text} }
        />
        <button
          className='add_post__btn'
          onClick={ this.onCurrencyBtnClick }>
          Add new post
        </button>
      </form>
    }

    if (posts.length > 0) {
      postsAssembled = posts.map((post, i) => <Post key={i+Math.random()} post={post} comments={comments} addComment={addComment} /> )
    }

    if (postsAssembled) {
      postsAssembled = <div className='posts'>
        <h2>POSTS:</h2>
        {postsAssembled}
      </div>
    }

    return <div>
      { formTemplate }
      { postsAssembled }

    </div>
  }
}

Page.propTypes = {
  user: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  addPost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
}