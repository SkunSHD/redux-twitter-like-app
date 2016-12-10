import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/Page'
import User from '../components/User'
import * as userActions from '../actions/UserActions'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
     const { posts, comments } = this.props.page
     const { addPost, addComment } = this.props.pageActions
     const { name, error } = this.props.user
     const { handleLogin } = this.props.userActions

    return <div className='container__app'>
      <User user={name} error={error} handleLogin={handleLogin} />
      <Page user={name} posts={posts} addPost={addPost} comments={comments} addComment={addComment} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    page: state.page,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)