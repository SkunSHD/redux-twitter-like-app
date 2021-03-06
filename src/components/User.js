import React, { PropTypes, Component } from 'react'

export default class User extends Component {

  componentDidMount() {
    this.inputPostText.focus()
  }

  onBtnLoginClickHandler = (e) => {
    e.preventDefault()
    const username = this.inputPostText.value;
    this.props.handleLogin(username)
  }

  render() {
    const { user, error } = this.props
    let template

    if (user) {
      template = <h2>Welcome, {user}!</h2>
    } else {
      template = <form>
        <h2>Type your login to sign in</h2>
        <input
          type='text'
          className='sign_in__input'
          placeholder='Type your login here...'
          ref={(input) => {this.inputPostText = input}}
        />
        <button
          className='sign_in__btn'
          onClick={this.onBtnLoginClickHandler}
          ref='login_button'>
          Sign in
        </button>
      </form>
    }

    return <div className='ib'>
      {template}
      {error ? <p className='error'> {error}.<br />Please try again.</p> : ''}
    </div>
  }
}

User.propTypes = {
  user: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired
}