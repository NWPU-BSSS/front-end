import React, { Component } from 'react'
import { PersonalInfoMenu } from '../personal-space-components/PersonalInfoMenu'
import { PersonalInfo } from './PersonalInfo'
import './Container.css'

export class ProfileBody extends Component {

  render () {
    return (
      <div className="ProfileBody">
        <PersonalInfoMenu/>
        <PersonalInfo/>
      </div>
    )
  }
}