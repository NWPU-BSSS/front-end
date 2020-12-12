import React, { Component } from 'react'
import { Input, Button } from 'antd'
import styles from './AdminLogin.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { admin_login } from '../@redux/actions'
import { ADMIN_PASSWORD, ADMIN_USERNAME, set_admin_state } from '../global'
import { error } from '../@redux/@common'

export default class AdminLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      admin: '',
      password: '',
      flag: false
    }
  }

  handleInputAdmin = e => {
    this.setState({ admin: e.target.value })
  }

  handleInputPassword = e => {
    this.setState({ password: e.target.value })
  }

  handleLogin = () => {
    let { admin, password } = this.state
    if (admin !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      error('admin username or password wrong!')
      return
    }
    set_admin_state({ admin, password })
    this.setState({ flag: true })
  }

  render () {
    if (this.state.flag) {
      return <Redirect to="/admin/insights"/>
    }

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>Admin</div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <Input placeholder="Username" onChange={this.handleInputAdmin}/>
            </div>
            <div className={styles.input}>
              <Input type="password" placeholder="Password" onChange={this.handleInputPassword}/>
            </div>
            <div className={styles.input}>
              <Button type="primary" block onClick={this.handleLogin}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AdminLogin = connect(
  () => {},
  { admin_login }
)(AdminLogin)