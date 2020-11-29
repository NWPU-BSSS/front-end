import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Select } from 'antd'
import { connect } from 'react-redux'
import { registerAsync, sendVerifyCodeAsync } from '../../@redux/actions'
import { Link } from 'react-router-dom'
import { sendVerifyCode2Email } from '../../@api'

const { Option } = Select

class RegisterForm extends Component {
  static propTypes = {
    register: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      disableRegisterButton: false,
      disableGetVerifyCode: false
    }
    this.form = {}
  }

  handleConfirmPassword = e => {
    this.form.confirmPassword = e.target.value
  }

  handleRegister = () => {
    let { email, username, password, confirmPassword } = this.form
    if (email && username && password && confirmPassword){
      if (password === confirmPassword) this.props.register({ ...this.form })
      else alert('password check failed')
    }
    else alert('please input your info')
  }

  handleInputVerifyCode = e => {
    this.form.verifyCode = e.target.value
  }

  handleInputUsername = e => {
    this.form.username = e.target.value
  }

  handleInputPassword = e => {
    this.form.password = e.target.value
  }

  handleInputEmail = e => {
    this.form.email = e.target.value
  }

  handleGetVerifyCode = async () => {
    let { email, username, password, confirmPassword } = this.form
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
                <Input placeholder="username" onChange={this.handleInputUsername}/>
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
              {/*<Input.Group compact>*/}
              {/*  <Select style={{ width: '20%' }} defaultValue="+86">*/}
              {/*    <Option value="+86">+86</Option>*/}
              {/*    <Option value="+87">+87</Option>*/}
              {/*  </Select>*/}
              {/*  <Input style={{ width: '80%' }} placeholder="请输入手机号"/>*/}
              {/*</Input.Group>*/}
              <label>
                <Input type="text" placeholder="email" onChange={this.handleInputEmail}/>
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
  { register: registerAsync, getVerifyCode: sendVerifyCodeAsync }
)(RegisterForm)

export { RegisterForm }
