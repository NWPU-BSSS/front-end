import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Space, Table, Tag } from 'antd'
import { PageTitle } from './base/PageTitle'
import { deleteBlogAsync, getAllBlogListAsync } from '../../@redux/actions_async'
import styles from './AdminBlogPage.module.css'

const columns = [
  {
    title: 'Id',
    dataIndex: 'blogId',
    key: 'blogId'
  },
  {
    title: 'User Id',
    dataIndex: 'userId',
    key: 'userId'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Preview',
    dataIndex: 'preview',
    key: 'preview',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => <Space>{tags.map(tag => <Tag color="red" key={tag}>{tag}</Tag>)}</Space>,
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: ({ blogId, handleClick }) => <Button danger onClick={() => handleClick(blogId)}>Delete</Button>,
  },
]

const dataFactory = (blogs, handle, data) => {
  return blogs.map((item, index) => {
    let { blogId, userId, title, tagA, tagB, tagC, preview } = item
    let tags = [tagA, tagB, tagC]
    return {
      key: index,
      title,
      blogId,
      userId,
      preview,
      tags,
      action: {
        blogId,
        handleClick: blogId => {
          handle({ ...data, blogId })
        }
      }
    }
  })
}

class AdminBlogPage extends Component {

  async componentWillMount () {
    this.props.getAllBlogListAsync()
  }

  render () {
    const { admin, password } = this.props
    const data = dataFactory(this.props.blogs, this.props.deleteBlogAsync, { admin, password })

    return (
      <div className={styles.container}>
        <PageTitle>Manage Blogs</PageTitle>
        <Table columns={columns} dataSource={data} pagination={false}/>
      </div>
    )
  }

}

AdminBlogPage = connect(
  ({ $AdminPageState: { admin, password, blogs } }) => ({
    admin,
    password,
    blogs
  }),
  { getAllBlogListAsync, deleteBlogAsync }
)(AdminBlogPage)

export { AdminBlogPage }