import React , {Component} from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined, PhoneFilled } from '@ant-design/icons'
import { LoginOrRegister, RememberLogin } from '../pages/LoginPage'

export class PhoneLoginForm extends Component {

  render () {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        // onFinish={onFinish()}
      >
        <div style={{
          margin: '20px'
        }}>
          <Input prefix={<PhoneFilled/>} placeholder="手机号"/>
        </div>
        <div style={{
          margin: '20px'
        }}>
          <Input.Group style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Input style={{ width: '60%' }} prefix={<LockOutlined/>} type="password" placeholder="验证码"/>
            <Button style={{ width: '35%' }} type="default">获取验证码</Button>
          </Input.Group>
        </div>
        <RememberLogin/>
        <LoginOrRegister login={this.props.login}/>
      </Form>
    )
  }
}