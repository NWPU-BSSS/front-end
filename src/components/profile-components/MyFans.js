import React, { Component } from 'react'
import styles from './MyFans.module.css'
import { FanItem } from '../base/FanItem'
import FanList from '../base/FanList'
import { connect } from 'react-redux'

export default class MyFans extends Component {


  render () {
    return (
      <div className={styles.container}>
        <FanList fanList={this.props.fans}/>
      </div>
    )
  }
}

MyFans = connect(
  ({$UserInfoState: {fans}}) => ({ fans})
)(MyFans)