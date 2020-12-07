import React, { Component } from 'react'
import { PersonalInfoMenu } from './PersonalInfoMenu'
import { PersonalInfo } from './PersonalInfo'
import './Container.css'
import { connect } from 'react-redux'
import { getUserInfoAsync } from '../../@redux/actions_async'

class ProfileBody extends Component {

  componentWillMount () {
    this.props.getUserInfoAsync()
  }

  render () {
    return (
      <div className="ProfileBody">
        <PersonalInfoMenu/>
        <PersonalInfo {...this.props.userInfo} />
      </div>
    )
  }
}

ProfileBody = connect(
  state => ({
    userInfo: state['UserState']
  }),
  { getUserInfoAsync }
)(ProfileBody)

export { ProfileBody }