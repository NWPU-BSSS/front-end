import React, { Component } from 'react'
import { ProfileBody } from '../components/profile-components/ProfileBody'
import { ProfileTop } from '../components/profile-components/ProfileTop'

export class ProfilePage extends Component {

  render () {
    return (
      <div>
        <ProfileTop/>
        <ProfileBody/>
      </div>
    )
  }
}