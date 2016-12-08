import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom';

export default class User extends Component {
  componentDidMount() {
    if(!this.props.name) ReactDOM.findDOMNode(this.refs.login__input).focus();
  }
  onBtnLoginClickHandler = (e) => {
    e.preventDefault()
    const username = ReactDOM.findDOMNode(this.refs.login__input).value;
    this.props.handleLogin(username)
  }
  render() {
    const { name, error } = this.props
    let template

    if (name) {
      template = <h2 className='logged'>Welcome, Herr {name}!</h2>
    } else {
      template = <form className='add cf'>
        <input
          type='text'
          className='sign_in__input'
          placeholder='Type your login here...'
          ref='login__input'
        />
        <button
          className='sign_in__btn'
          onClick={this.onBtnLoginClickHandler}
          ref='login_button'>
          Sign in
        </button>
      </form>
    }
    
    return <div className='ib user'>
      {template}
      {error ? <p className='error'> {error}. <br /> Please try again.</p> : ''}
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
}