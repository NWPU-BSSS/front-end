import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogAsync } from '../@redux/actions_async'
import { UserList } from '../components/admin-user-components/UserList'

class AdminUserPage extends Component {

  render () {
    return (
      <div className="AdminUserPage">
        <h1>admin user</h1>
        <UserList></UserList>
      </div>
    )
  }

}

// AdminUserPage = connect(
//   state => {
//     let { title, content, likeNum, commentNum, favoriteNum } = state.$BlogPageState
//     return ({
//       blogInfo: { title, content, likeNum, commentNum, favoriteNum }
//     })
//   },
//   { getBlogAsync }
// )(AdminUserPage)

export { AdminUserPage }