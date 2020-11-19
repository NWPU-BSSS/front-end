import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Select } from 'antd'
import { connect } from 'react-redux'
import { registerAsync } from '../../@redux/actions'
import { Link } from 'react-router-dom'

const { Option } = Select

class RegisterForm extends Component {
  static propTypes = {
    register: PropTypes.func
  }


  constructor (props) {
    super(props)
    this.state = {
      disableRegisterButton: false
    }
  }

  handleConfirmPassword = e =>{

  }

  handleRegister = () => {
    // this.props.register(this.username, this.password, this.email)
  }

  handleInputUsername = e => {
    this.username = e.target.value
  }

  handleInputPassword = e => {
    this.password = e.target.value
  }

  handleInputEmail = e => {
    this.email = e.target.value
  }

  render () {
    return (
      <div className="registration-form">
        <div className="title" style={{
          margin: '20px auto',
          width: 347,
        }}>
          注册
        </div>
        <div style={{
          width: 347,
          margin: '0 auto',
        }}>
          <form>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input placeholder="请输入用户名" onChange={this.handleInputUsername}/>
              </label>
            </div>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input type="password" placeholder="请输入密码" onChange={this.handleInputPassword}/>
              </label>
            </div>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input type="password" placeholder="确认密码" onChange={this.handleConfirmPassword}/>
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
                <Input type="text" placeholder="请输入邮箱" onChange={this.handleInputEmail}/>
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
                <Input placeholder="请输入验证码" style={{ width: '60%' }}/>
                <Button style={{ width: '35%' }}>获取验证码</Button>
              </Input.Group>
            </div>
            <div style={{
              margin: '20px 0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Button style={{ width: '40%' }} type="primary" onClick={this.handleRegister}>注册</Button>
              <Button style={{ width: '40%' }} type="link">
                <Link to="/login">使用已有帐户登录</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

RegisterForm = connect(
  state => ({}),
  { register: registerAsync }
)(RegisterForm)

export { RegisterForm }
