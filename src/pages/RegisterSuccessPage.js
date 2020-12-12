import React, { Component } from 'react'
import { LoginFormTop } from '../components/base/LoginFormTop'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setRegisterSuccess } from '../@redux/actions'

class SuccessResult extends Component {
  render () {
    return (
      <Result
        status="success"
        title="Register Success"
        subTitle="Now you can login Bsss and use this blog web site"
        extra={[
          <Button danger key="back">
            <Link to="/">Back to Home</Link>
          </Button>,
        ]}
      />
    )
  }
}

class RegisterSuccessPage extends Component {

  componentWillMount () {
    this.props.setRegisterSuccess(false)
  }

  render () {
    return (
      <div style={{
        margin: '200px auto'
      }}>
        <LoginFormTop/>
        <div style={{
          width: '100%',
          margin: '0 auto'
        }}>
          <SuccessResult/>
        </div>
      </div>
    )
  }
}

RegisterSuccessPage = connect(
  state => ({}),
  { setRegisterSuccess }
)(RegisterSuccessPage)

export { RegisterSuccessPage }

