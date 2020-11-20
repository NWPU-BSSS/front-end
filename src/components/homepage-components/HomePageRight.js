import React, { Component } from 'react'

import './HomePageRight.css'
import { QuickEntry } from './QuickEntry'
import { UserCard } from './UserCard'
import { MessageOption } from './MessageOption'

export class HomePageRight extends Component {

  render () {
    return (
      <div className="HomePageRight">
        <UserCard/>
        <MessageOption/>
      </div>
    )
  }
}