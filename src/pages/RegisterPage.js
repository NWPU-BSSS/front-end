import React, { Component } from 'react'
import { LoginFormTop } from '../components/@common/LoginFormTop'
import { RegisterForm } from '../containers/RegisterForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class RegisterPage extends Component {

  render () {

    if (this.props.isRegisterSuccess) {
      return <Redirect to="/reg-success"/>
    }

    return (
      <div style={{
        margin: '170px auto',
        width: '100%',
      }}>
        <div style={{
          maxWidth: 500,
          margin: '0 auto'
        }}>
          <LoginFormTop/>
          <RegisterForm/>
        </div>
      </div>
    )
  }
}

RegisterPage = connect(
  state => ({ isRegisterSuccess: state.registerSuccess })
)(RegisterPage)

export { RegisterPage }



