import React, { Component } from 'react'
import { Checkbox, Tabs, Button, Form, Input } from 'antd'
import {
  AlipayCircleFilled,
  LockOutlined, PhoneFilled,
  TaobaoCircleFilled,
  UserOutlined,
  WeiboCircleFilled
} from '@ant-design/icons'
import { LoginFormTop } from '../components/@common/LoginFormTop'
import { Link } from 'react-router-dom'

const { TabPane } = Tabs

const onFinish = data => {
}
/**
 * 记住密码栏
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const RememberLogin = function (props) {
  return (
    <div style={{
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Checkbox checked={props.checked}>自动登录</Checkbox>
      <a href="#">忘记密码</a>
    </div>
  )
}
/**
 * 登陆或注册
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const LoginOrRegister = function (props) {
  const fontIcon = { fontSize: '24px', margin: '5px', color: '#1890ff' }

  return (
    <div style={{
      ...formItem, ...btnBox
    }}>
      <Button type="primary" style={{ width: '100%' }} onClick={props.login}>登陆</Button>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0'
      }}>
        <div style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          display: 'flex'
        }}>
          <div>
            其他登录方式
          </div>
          <div>
            <AlipayCircleFilled style={fontIcon}/>
            <TaobaoCircleFilled style={fontIcon}/>
            <WeiboCircleFilled style={fontIcon}/>
          </div>
        </div>
        <Link to="/register" type="default" style={{
          textAlign: 'center', width: '10%'
        }}>注册</Link>
      </div>
    </div>
  )
}

/**
 * 手机号登陆组件
 */
class PhoneLoginForm extends Component {
  render () {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish()}
      >
        <div style={formItem}>
          <Input prefix={<PhoneFilled/>} placeholder="手机号"/>
        </div>
        <div style={formItem}>
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
        <LoginOrRegister/>
      </Form>
    )
  }
}

/**
 * 账号密码登陆组件
 */
class AccountLoginForm extends Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin () {
    window.location.pathname = '/'
  }

  render () {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish()}
      >
        <div style={formItem}>
          <Input prefix={<UserOutlined/>} placeholder="请输入用户名"/>
        </div>
        <div style={formItem}>
          <Input prefix={<LockOutlined/>} type="password" placeholder="请输入密码"/>
        </div>
        <RememberLogin/>
        <LoginOrRegister login={this.handleLogin}/>
      </Form>
    )
  }
}

export class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: 'account',
    }
  }

  handleMenuClick = e => {
    this.setState({ menu: e.key })
  }

  render () {

    return (
      <div style={{
        width: 350,
        margin: '0 auto'
      }}>
        <LoginFormTop/>
        <Tabs centered defaultActiveKey="1">
          <TabPane tab="账号密码登陆" key="1">
            <AccountLoginForm/>
          </TabPane>
          <TabPane tab="手机号登陆" key="2">
            <PhoneLoginForm/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

const btnBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column'
}

const formItem = {
  margin: '20px'
}