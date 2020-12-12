import React, { Component } from 'react'
import styles from './MySubscribes.module.css'
import FanList from '../base/FanList'
import { connect } from 'react-redux'
import { getUserFansAsync, getUserSubscribesAsync } from '../../@redux/actions_async'

export class MySubscribes extends Component {
  componentWillMount () {
    let bloggerId = this.props.userId
    this.props.getUserSubscribesAsync(bloggerId)
  }

  render () {
    return (
      <div className={styles.container}>
        <FanList fanList={this.props.subscribes}/>
      </div>
    )
  }
}


MySubscribes = connect(
  ({ $UserInfoState: { subscribes }, $UserState: { userId } }) => ({ subscribes, userId }),
  { getUserSubscribesAsync }
)(MySubscribes)