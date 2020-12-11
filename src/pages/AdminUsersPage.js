import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getAdminUsersAsync } from '../@redux/actions_async'
import { AdminUsersTable } from '../components/admin-user-components/AdminUsersTable'
import { AdminUsersSearch } from '../components/admin-user-components/AdminUsersSearch'

class AdminUsersPage extends Component {

  render () {
    return (
      <div>
        <AdminUsersSearch/>
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