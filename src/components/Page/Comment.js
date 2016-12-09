import React from 'react'

export default class Comment extends React.Component {

  render() {
    const { user, text } = this.props.comment
    return <div className='comment'> 
      <h4>Name: {user}</h4>
      <p>Text:  {text}</p>
    </div>
  }
}

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired
}