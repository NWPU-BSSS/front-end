import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Select } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { sendVerifyCode2Email } from '../../@api'
import { checkEmailExist, checkUsernameExist } from '../../@api/root'
import { registerAsync, sendVerifyCodeAsync } from '../../@redux/actions_async'

const { Option } = Select

class RegisterForm extends Component {
  static propTypes = {
    registerAsync: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      disableRegisterButton: true,
      disableGetVerifyCode: false
    }
    this.form = {}
  }

  handleCheckUsername = async () => {
    let json = await checkUsernameExist(this.form.username)
    let { code, msg, data } = json
    if (code === 1) {
      if (data.result) {
        alert('the username has been registered')
      }
    } else {
      alert(msg)
    }
  }

  handleCheckEmail = async () => {
    let json = await checkEmailExist(this.form.email)
    let { code, msg, data } = json
    if (code === 1) {
      if (data.result) {
        alert('the email has been registered')

      }
    } else {
      alert(msg)
    }
  }

  handleConfirmPassword = e => {
    this.form.confirmPassword = e.target.value
  }

  handleRegister = () => {
    let { email, username, password, confirmPassword } = this.form
    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) this.props.registerAsync({ ...this.form })
      else alert('password check failed')
    } else alert('please input your info')
  }

  enableRegisterButton = () => this.setState({ disableRegisterButton: false })

  checkForm = () => {
    let { email, username, password, confirmPassword } = this.form
    if (email && username && password && confirmPassword) this.enableRegisterButton()
  }

  handleInputVerifyCode = e => {
    this.form.verifyCode = e.target.value
    this.checkForm()
  }

  handleInputUsername = e => {
    this.form.username = e.target.value
    this.checkForm()
  }

  handleInputPassword = e => {
    this.form.password = e.target.value
    this.checkForm()
  }

  handleInputEmail = e => {
    this.form.email = e.target.value
    this.checkForm()
  }

  handleGetVerifyCode = async () => {
    let { email } = this.form
    if (!email) {
      alert('please input your email')
      return
    }
    this.setState({ disableGetVerifyCode: true })
    setTimeout(() => {
      this.setState({ disableGetVerifyCode: false })
    }, 60000)
    this.props.getVerifyCode({ email })
  }

  render () {
    return (
      <div className="registration-form">
        <div className="title" style={{
          margin: '20px auto',
          width: 347,
        }}>
          Register
        </div>
        <div style={{
          width: 347,
          margin: '0 auto',
        }}>
          <form>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input placeholder="username" onBlur={this.handleCheckUsername} onChange={this.handleInputUsername}/>
              </label>
            </div>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input type="password" placeholder="password" onChange={this.handleInputPassword}/>
              </label>
            </div>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input type="password" placeholder="confirm password" onChange={this.handleConfirmPassword}/>
              </label>
            </div>
            <div style={{
              margin: '20px 0',
            }}>
              <label>
                <Input type="text" placeholder="email" onBlur={this.handleCheckEmail} onChange={this.handleInputEmail}/>
              </label>
            </div>
            <div style={{
              margin: '10px 0',
            }}>
              <Input.Group style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <Input placeholder="verify code" style={{ width: '60%' }} onChange={this.handleInputVerifyCode}/>
                <Button disabled={this.state.disableGetVerifyCode} style={{ width: '35%' }}
                        onClick={this.handleGetVerifyCode}>Send Code</Button>
              </Input.Group>
            </div>
            <div style={{
              margin: '20px 0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Button style={{ width: '40%' }} type="primary" onClick={this.handleRegister}>Register</Button>
              <Button style={{ width: '40%' }} type="link">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

RegisterForm = connect(
  state => ({
    disableGetVerifyCode: state.registerPage.disableSendCodeButton
  }),
  { registerAsync, sendVerifyCodeAsync }
)(RegisterForm)

export { RegisterForm }
