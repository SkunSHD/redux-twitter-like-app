import React, { PropTypes, Component } from 'react'
import Post from './Page/Post'

export default class Page extends Component {
  onCurrencyBtnClick = (e) => {
    e.preventDefault()
    const postText = this.postInput.value
    this.props.addPost({user: this.props.user, text: postText})
    this.postInput.value = ''
  }
  render() {
    const { user, posts } = this.props
    let formTemplate, assembledPosts

    if (user) {
      formTemplate = <form> 
        <textarea 
          className='add_text__textarea'
          defaultValue=''
          placeholder='Type your text here...'
          ref={(input) => { this.postInput = input}}
        />
        <button 
          className='add_post__btn' 
          onClick={this.onCurrencyBtnClick}>
          Add new post
        </button>
      </form>
    }

    if (posts && posts.length > 0) {
      assembledPosts = posts.map((post, i) => <Post key={i+Math.random()} post={post} /> )
    }

    return <div>
      {formTemplate}
      { assembledPosts && assembledPosts.length > 0 ? assembledPosts : ''}
    </div>
  }
}

Page.propTypes = {
  user: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  addPost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
}