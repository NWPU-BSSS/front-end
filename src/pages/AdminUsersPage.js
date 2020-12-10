import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getAdminUsersAsync } from '../@redux/actions_async'
import { AdminUsersTable } from '../components/admin-user-components/AdminUsersTable'
import { Space } from 'antd'
import deleteIcon from '../assets/img/u288.svg'

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
//     let { userId, username, nickname, avatar, introduction, gender } = state.$AdminUsersPageState;
//     let genderStr;
//     if (gender === 0) {
//       genderStr = 'male'
//     } else if (gender === 1) {
//       genderStr = 'female'
//     } else {
//       genderStr = 'unknown'
//     }
//     return ({
//       dataSources: { userId, username, nickname, avatar, introduction, gender: genderStr }
//     })
//   },
//   { getAdminUsersAsync }
// )(AdminUsersPage)

export { AdminUsersPage }