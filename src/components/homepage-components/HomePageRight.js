import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HomePageRight.css'
import { QuickEntry } from './QuickEntry'
import { UserCard } from './UserCard'
import { MessageOption } from './MessageOption'
import { connect } from 'react-redux'

class HomePageRight extends Component {

  static propTypes = {
    badgeNum: PropTypes.object,
    user: PropTypes.object
  }

  render () {
    return (
      <div className="HomePageRight">
        <UserCard {...this.props.user}/>
        <MessageOption {...this.props.user.badgeNum}/>
      </div>
    )
  }
}

HomePageRight = connect(
  state => ({
    user: state['UserState']
  })
)(HomePageRight)
export { HomePageRight }