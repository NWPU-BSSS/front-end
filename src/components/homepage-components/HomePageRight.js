import React, { Component } from 'react'

import './HomePageRight.css'
import { QuickEntry } from './QuickEntry'
import { UserCard } from './UserCard'
import { MessageOption } from './MessageOption'
import { connect } from 'react-redux'

class HomePageRight extends Component {

  render () {
    return (
      <div className="HomePageRight">
        <UserCard {...this.props.user}/>
        <MessageOption/>
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