import React, { Component } from 'react'
import './AdminUsersTable.css'
import deleteIcon from '../../../assets/img/u288.svg'
import { Space, Table } from 'antd'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'UserName',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'NickName',
    dataIndex: 'nickName',
    key: 'nickName',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: 'Introduction',
    key: 'introduction',
    dataIndex: 'introduction',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Operation',
    key: 'operation',
    dataIndex: 'operation',
    render: (props) => (
      <Space size="middle">
        <img src={deleteIcon} alt={'Icon'}/>
        <Link to={{ pathname: 'admin/delete', state: props }}>Delete</Link>
      </Space>
    ),
  },
]

const dataSources = [
  {
    key: '1',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'Dog Son is son of dog',
    operation: { userID: 0 },
    gender: 'male',
  },
  {
    key: '2',
    userName: 'Ed Sheeran',
    nickName: '黄老板',
    avatar: 'avatar',
    introduction: 'Shape of you',
    operation: { userID: 1 },
    gender: 'male',
  },
  {
    key: '3',
    userName: 'Taylor Swift',
    nickName: '霉霉',
    avatar: 'avatar',
    introduction: '1989',
    gender: 'female',
  },
  {
    key: '4',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '5',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '6',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '7',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '8',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '9',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '10',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '11',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '12',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '13',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '14',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '15',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
  {
    key: '16',
    userName: 'John Brown',
    nickName: 'Dog Son',
    avatar: 'avatar',
    introduction: 'This is introduction',
    gender: 'male',
  },
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}

export class AdminUsersTable extends Component {

  state = {
    top: 'topLeft',
    bottom: 'bottomLeft',
  }

  static propTypes = {
    adminUserList: PropTypes.array
  }

  render () {
    return (
      <div className="user-table">
        {/*<UserListHead></UserListHead>*/}
        <Table rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
               columns={columns}
               dataSource={dataSources}
               pagination={{ position: [this.state.bottom], pageSize: 15 }}/>
        {/*<UserListRow userName='UserName1' nickName='DogSon' avatar='avatar1' introduction='DogSon is son of dog' gender='Male'></UserListRow>*/}
      </div>
    )
  }
}

// redux中还没有，先注掉了
// AdminUsersTable = connect(
//   state => {
//     dataSources: state.$AdminUsersTable.adminUserList;
//     for (let i = 0; i < dataSources.length; i++) {
//       if (dataSources.gender === 0) {
//         dataSources.gender = 'male'
//       } else if (dataSources.gender === 1) {
//         dataSources.gender = 'female'
//       } else {
//         dataSources.gender = 'unknown'
//       }
//       dataSources.key = dataSources.userId;
//       dataSources.operation = dataSources.userId
//     }
//   },
//   { getAdminUsersListAsync }
// )(AdminUsersTable)