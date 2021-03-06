import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Tabs } from 'antd'
import { AlipayCircleFilled, TaobaoCircleFilled, WeiboCircleFilled } from '@ant-design/icons'
import { LoginFormTop } from '../components/base/LoginFormTop'
import { Link, Redirect } from 'react-router-dom'
import { AccountLoginForm } from '../components/loginpage-components/AccountLoginForm'
import { connect } from 'react-redux'

const { TabPane } = Tabs

const fontIcon = { fontSize: '24px', margin: '5px', color: '#1890ff' }

const btnBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column'
}

const formItem = {
  margin: '20px'
}

/**
 * 记住密码栏
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export function RememberLogin (props) {
  return (
    <div style={{
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Checkbox checked={props.checked} onClick={props.handleCheck}>Auto Sign In</Checkbox>
      <a href="#">Forget Password?</a>
    </div>
  )
}

/**
 * 登陆或注册
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

class LoginOrRegister extends Component {

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  render () {
    return <div style={{
      ...formItem, ...btnBox
    }}>
      <Button type="primary" style={{ width: '100%' }} onClick={this.props.onLogin}>Sign In</Button>
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
          {/*<div>Other</div>*/}
          {/*<div>*/}
          {/*  <AlipayCircleFilled style={fontIcon}/>*/}
          {/*  <TaobaoCircleFilled style={fontIcon}/>*/}
          {/*  <WeiboCircleFilled style={fontIcon}/>*/}
          {/*</div>*/}
        </div>
        <Link to="/register" type="default" style={{
          textAlign: 'center', width: '20%'
        }}>Sign Up</Link>
      </div>
    </div>
  }
}

class LoginPage extends Component {

  static propTypes = {
    isLogin: PropTypes.bool.isRequired
  }

  componentDidMount () {
  }

  render () {
    if (this.props.isLogin) {
      return (
        <Redirect to="/"/>
      )
    }

    return (
      <div style={{
        width: 350,
        margin: '200px auto'
      }}>
        <LoginFormTop/>
        <Tabs centered defaultActiveKey="1">
          <TabPane tab="Account" key="1">
            <AccountLoginForm/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

LoginPage = connect(
  state => ({
    isLogin: state.$UserState.userId !== -1
  })
)(LoginPage)

export { LoginPage, LoginOrRegister }

RememberLogin.propTypes = {
  checked: PropTypes.bool,
  handleCheck: PropTypes.func
}