import React, { Component } from 'react'
import { Input, Select, Button } from 'antd'
import { LoginFormTop } from '../components/@common/LoginFormTop'

const { Option } = Select

export class RegisterPage extends Component {

  render () {
    return (
      <div style={{
        width: '100%',
      }}>
        <div style={{
          maxWidth: 500,
          margin: '0 auto'
        }}>
          <LoginFormTop/>
          <RegistrationForm/>
        </div>
      </div>
    )
  }
}

class RegistrationForm extends Component {
  constructor (props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister(){
    window.location.pathname = '/reg-success'
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
                <Input placeholder="请输入用户名"/>
              </label>
            </div>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input type="password" placeholder="请输入密码"/>
              </label>
            </div>
            <div style={{ margin: '20px 0' }}>
              <label>
                <Input type="password" placeholder="确认密码"/>
              </label>
            </div>
            <div style={{
              margin: '20px 0',
            }}>
              <Input.Group compact>
                <Select style={{ width: '20%' }} defaultValue="+86">
                  <Option value="+86">+86</Option>
                  <Option value="+87">+87</Option>
                </Select>
                <Input style={{ width: '80%' }}
                       placeholder="请输入手机号"/>
              </Input.Group>
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
                <Button
                  style={{ width: '35%' }}>获取验证码</Button>
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
              <Button style={{ width: '40%' }} type="link">使用已有帐户登录</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}