import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './MyBlogs.module.css'
import { BaseBlogList } from '../base/BaseBlogList'
import { connect } from 'react-redux'
import { getMyBLogsAsync } from '../../@redux/actions_async'

export class MyBlogs extends Component {
  static propTypes = {
    myBlogs: PropTypes.array
  }

  componentWillMount () {
    let userId = this.props.userId
    this.props.getMyBLogsAsync({userId})
  }

  render () {
    return (
      <div className={styles.container}>
        <BaseBlogList blogList={this.props.myBlogs}/>
      </div>
    )
  }
}

MyBlogs = connect(
  ({ $UserInfoState: { myBlogs }, $UserState: {userId} }) =>
    ({ myBlogs, userId }),
  { getMyBLogsAsync }
)(MyBlogs)