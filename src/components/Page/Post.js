import React from 'react'

export default class Post extends React.Component {
  render() {
    const { user, text } = this.props.post
    return <div className='post'> 
      <h3>Name: {user}</h3>
      <p>Text:  {text}</p>
      <button>Add comment</button>
    </div>
  }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
}