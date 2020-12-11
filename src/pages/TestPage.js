import React, { Component } from 'react'
import { login } from '../@api'
import { AdminUsersTable } from '../components/admin-user-components/AdminUsersTable'
import { AdminUsersSearch } from '../components/admin-user-components/AdminUsersSearch'

export class TestPage extends Component {


  handleClick = async () => {
    await login({ email: '925993394@qq.com', password: '0' })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}