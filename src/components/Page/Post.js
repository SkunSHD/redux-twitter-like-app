import React, { PropTypes } from 'react'
import Comment from './Comment'

export default class Post extends React.Component {
  onBtnClickAddComment = (e) => {
    e.preventDefault()
    this.props.addComment({
      post_id: this.props.post.post_id,
      user: this.props.post.user,
      text: this.inputComment.value
    })
    this.inputComment.value = ''
  }
  render() {
    let commentsAssembled
    const { user, text, post_id } = this.props.post
    const { comments } = this.props

    if (comments && comments.length > 0) {
      commentsAssembled = comments.map((comment, i) => {
        if (comment.post_id == post_id) return <Comment key={i+Math.random()} comment={comment} />
      })
    }

    return <div className='post'> 
      <h3>Name: {user}</h3>
      <p>Text:  {text}</p>
      <input ref={(input) => this.inputComment = input} />
      <button onClick={this.onBtnClickAddComment}>Add comment</button>
      { commentsAssembled }
    </div>
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
}