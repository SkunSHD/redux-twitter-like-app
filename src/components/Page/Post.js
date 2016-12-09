import React from 'react'

export default class Post extends React.Component {
  onBtnClickComment = (e) => {
    e.preventDefault()
    console.log(this.inputComment.value)
    this.inputComment.value = ''
  }
  render() {
    const { user, text } = this.props.post
    return <div className='post'> 
      <h3>Name: {user}</h3>
      <p>Text:  {text}</p>
      <input ref={(input) => this.inputComment = input} />
      <button onClick={this.onBtnClickComment}>Add comment</button>
    </div>
  }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
}