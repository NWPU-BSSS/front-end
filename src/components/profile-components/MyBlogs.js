import { EyeOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import styles from './MyBlogs.module.css'
import { Link } from 'react-router-dom'
import * as item from 'prop-types'
import { BaseBlogList } from '../base/BaseBlogList'
import { connect } from 'react-redux'
import { getMyBLogsAsync } from '../../@redux/actions_async'

class BlogItem extends Component {

  render () {
    return (
      <div className="My_blog">
        <div className="related-head">
          <div className="related-head-title">
            <a herf="#">{this.props.blogtitle}</a>
          </div>
        </div>
        <div className="blog-content">
          <div>{this.props.blogcontent}</div>
        </div>
        <div className="read-record">
          <div>{this.props.blogamount}阅读</div>
          <div>{this.props.datetime}</div>
        </div>
      </div>
    )
  }
}

export class MyBlogs extends Component {
  render () {
    return (
      <div className={styles.container}>
        <BaseBlogList blogList={this.props.myBlogs}/>
      </div>
    )
  }
}

MyBlogs = connect(
  ({ $UserInfoState: { myBlogs } }) =>
    ({ myBlogs }),
  { getMyBLogsAsync }
)(MyBlogs)