import React, { Component } from 'react'
import { LoginFormTop } from '../components/@common/LoginFormTop'
import { RegisterForm } from '../containers/RegisterForm'



export class RegisterPage extends Component {

  render () {
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

