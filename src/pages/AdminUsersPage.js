import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getAdminUsersAsync } from '../@redux/actions_async'
import { AdminUsersTable } from '../components/admin-user-components/AdminUsersTable'

class AdminUsersPage extends Component {

  render () {
    return (
      <div className="AdminUserPage">
        <h1>admin user</h1>
        <AdminUsersTable/>
      </div>
    )
  }

}

// AdminUsersPage = connect(
//   state => {
//
//   },
//   { getAdminUsersAsync }
// )(AdminUsersPage)

export { AdminUsersPage }