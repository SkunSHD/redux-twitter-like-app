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

    if (comments.length > 0) {
      commentsAssembled = comments.filter((comment) => {
        return comment.post_id == post_id
      })
      if (commentsAssembled.length > 0) {
        commentsAssembled = commentsAssembled.map((comment, i) => {
          return <Comment key={i + post_id} comment={comment} />
        })

        commentsAssembled = <div>
          <h2>Comments:</h2>
          {commentsAssembled}
        </div>
      }
    }    

    return <div className='post-block'>
      <div className='post'> 
        <h3>Name: {user}</h3>
        <p>Text:  {text}</p>
        <input ref={(input) => this.inputComment = input} />
        <button onClick={this.onBtnClickAddComment}>Add comment</button>
      </div>
      <div className='comments-block'>
        {commentsAssembled}
      </div>        
    </div>
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
}