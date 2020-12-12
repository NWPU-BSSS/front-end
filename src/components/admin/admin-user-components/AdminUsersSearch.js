import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getAdminUsersAsync } from '../@redux/actions_async'
import './AdminUsersSearch.css'

class AdminUsersSearch extends Component {

  render () {
    return (
      <div className="AdminUserPage">
        <div className="ManageUsers">Manage Users</div>
        <div className="UserName">Username:</div>
        <input className="InputUserName"/>
        <div className="NickName">Nickname:</div>
        <input className="InputNickName"/>
        <button className="Query">Query</button>
        <button className="Reset">Reset</button>
        <button className="NewUser">+ New User</button>
        <button className="BulkOperation">Bulk Operation</button>
        <button className="More">...</button>
        <div className="SelectedMessage">
          <button className="SelectedNumber">4</button>
          <div className="Font"> items have been selected</div>
          <button className="Clear">clear</button>
        </div>
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

export { AdminUsersSearch }