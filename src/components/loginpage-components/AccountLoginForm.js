import React, { Component } from 'react'
import { Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginOrRegister, RememberLogin } from '../../pages/LoginPage'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginAsync } from '../../@redux/actions_async'

class AccountLoginForm extends Component {
  handleCheckRemember = () => {
    this.setState({ remember: !this.state.remember })
  }

  constructor (props) {
    super(props)
    this.state = {
      remember: false
    }
  }

  static propTypes = {
    loginAsync: PropTypes.func
  }

  handleInputEmail = e => {
    this.email = e.target.value
  }

  handleInputPassword = e => {
    this.password = e.target.value
  }

  handleLogin = () => {
    let { email, password } = this
    let { remember } = this.state
    if (email && password) {
      if (!/@/.test(email)) {
        let username = email
        this.props.loginAsync({ username, password, remember })
      } else this.props.loginAsync({ email, password, remember })
    } else alert('please input your email or username and password')
  }

  render () {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <div style={{
          margin: '20px'
        }}>
          <Input prefix={<UserOutlined/>} placeholder="username/email" onChange={this.handleInputEmail}/>
        </div>
        <div style={{
          margin: '20px'
        }}>
          <Input prefix={<LockOutlined/>} type="password" placeholder="password" onChange={this.handleInputPassword}/>
        </div>
        <RememberLogin checked={this.state.remember} handleCheck={this.handleCheckRemember}/>
        <LoginOrRegister onLogin={this.handleLogin}/>
      </Form>
    )
  }
}

AccountLoginForm = connect(
  state => ({}),
  { loginAsync }
)(AccountLoginForm)

export { AccountLoginForm }