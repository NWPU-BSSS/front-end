import React, { Component } from 'react'
import styles from './AdminUsersPage.module.css'
import { Table, Space, Tag, Button, Avatar } from 'antd'
import { PageTitle } from './base/PageTitle'
import { getAllUsersListAsync } from '../../@redux/actions_async'
import { connect } from 'react-redux'

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
      return <Avatar src={avatar} />
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

const dataFactory = users => {
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
        alert('delete ' + userId)
      }
    }
  })
}

class AdminUsersPage extends Component {

  componentWillMount () {
    this.props.getAllUsersListAsync()
  }

  render () {
    const data = dataFactory(this.props.users)

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
  { getAllUsersListAsync }
)(AdminUsersPage)

export { AdminUsersPage }