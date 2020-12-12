import React, { Component } from 'react'
import styles from './MyFans.module.css'
import { FanItem } from '../base/FanItem'
import FanList from '../base/FanList'
import { connect } from 'react-redux'
import { getFavBlogsAsync, getUserFansAsync } from '../../@redux/actions_async'

export default class MyFans extends Component {

  componentWillMount () {
    let bloggerId = this.props.userId
    this.props.getUserFansAsync(bloggerId)
  }

  render () {
    return (
      <div className={styles.container}>
        <FanList fanList={this.props.fans}/>
      </div>
    )
  }
}

MyFans = connect(
  ({ $UserInfoState: { fans }, $UserState: { userId } }) => ({ fans, userId }),
  { getUserFansAsync }
)(MyFans)