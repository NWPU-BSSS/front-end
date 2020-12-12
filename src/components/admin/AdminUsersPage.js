import React, { Component } from 'react'
import styles from './AdminUsersPage.module.css'
import { Table, Space, Tag, Button, Avatar } from 'antd'
import { PageTitle } from './base/PageTitle'
import { deleteUserAsync, getAllUsersListAsync } from '../../@redux/actions_async'
import { connect } from 'react-redux'
import { get_admin_state } from '../../global'

const columns = [
  {
    title: 'Id',
    dataIndex: 'userId',
    key: 'userId'
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: 'Avatar',
    key: 'avatar',
    dataIndex: 'avatar',
    render: avatar => {
      return <Avatar src={avatar}/>
    },
  },
  {
    title: 'Introduction',
    key: 'introduction',
    dataIndex: 'introduction',
  },
  {
    title: 'Gender',
    key: 'gender',
    dataIndex: 'gender',
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: handleClick => <Button danger onClick={handleClick}>Delete</Button>,
  },
]

const dataFactory = (users, handle, data) => {
  return users.map((item, index) => {
    let { userId, username, nickname, avatar, introduction, gender } = item
    return {
      key: index,
      username,
      nickname,
      avatar,
      introduction,
      gender,
      userId,
      action: () => {
        handle({ ...data, userId })
      }
    }
  })
}

class AdminUsersPage extends Component {

  componentWillMount () {
    this.props.getAllUsersListAsync()
  }

  render () {
    const { admin, password } = get_admin_state()

    let data = dataFactory(this.props.users, this.props.deleteUserAsync, { admin, password })

    return (
      <div className={styles.container}>
        <PageTitle>Manage Users</PageTitle>
        <Table columns={columns} dataSource={data} pagination={false}/>
      </div>
    )
  }

}

AdminUsersPage = connect(
  ({ $AdminPageState: { admin, password, users } }) => ({
    admin,
    password,
    users
  }),
  { getAllUsersListAsync, deleteUserAsync }
)(AdminUsersPage)

export { AdminUsersPage }