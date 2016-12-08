import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

export default class Page extends Component {
  onCurrencyBtnClick = (e) => {
    e.preventDefault()
    const postText = ReactDOM.findDOMNode(this.refs.textarea_text).value;
    console.log(postText)
    this.props.addPost(postText)
  }

  render() {
    const { user, text } = this.props
    let formTemplate, postTemplate
    if (user) {
      formTemplate = <form> 
        <textarea 
          className='add__text'
          defaultValue=''
          placeholder='Type your text here...'
          ref='textarea_text'
        />
        <button 
          className='add_post__btn' 
          onClick={this.onCurrencyBtnClick}>
          Add new post
        </button>
      </form>
    }

    if (text) {
      postTemplate += <div className='post'>
        <h3>Username: {user}</h3>
        <p>Message: {text}</p>
      </div>
    }

    return <div>
      {formTemplate}
      {postTemplate}
    </div>
  }
}

Page.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
}