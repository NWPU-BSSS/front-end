import React, { Component } from 'react'
import { Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginOrRegister, RememberLogin } from '../pages/LoginPage'
import PropTypes from 'prop-types'
import { loginAsync } from '../@redux/actions'
import { connect } from 'react-redux'

class AccountLoginForm extends Component {

  static propTypes = {
    loginAsync: PropTypes.func.isRequired
  }

  handleInputEmail = e => {
    this.email = e.target.value
  }

  handleInputPassword = e => {
    this.password = e.target.value
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
          <Input prefix={<UserOutlined/>} placeholder="请输入账户邮箱" onChange={this.handleInputEmail}/>
        </div>
        <div style={{
          margin: '20px'
        }}>
          <Input prefix={<LockOutlined/>} type="password" placeholder="请输入密码" onChange={this.handleInputPassword}/>
        </div>
        <RememberLogin/>
        <LoginOrRegister onLogin={{/*() => this.props.loginAsync(this.email, this.password)*/}}/>
      </Form>
    )
  }
}

AccountLoginForm = connect(
  state => ({}),
  { loginAsync }
)(AccountLoginForm)

export { AccountLoginForm }