import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HomePageRight.css'
import { UserCard } from './UserCard'
import { MessageOption } from './MessageOption'
import { connect } from 'react-redux'

class HomePageRight extends Component {

  static propTypes = {
    badgeNum: PropTypes.object,
    baseInfo: PropTypes.object
  }

  render () {
    return (
      <div className="HomePageRight">
        <UserCard {...this.props.baseInfo}/>
        <MessageOption {...this.props.badgeNum}/>
      </div>
    )
  }
}

HomePageRight = connect(
  state => {
    let {  $UserInfoState } = state, { badgeNum, baseInfo } = $UserInfoState
    return {
      badgeNum,
      baseInfo
    }
  }
)(HomePageRight)
export { HomePageRight }