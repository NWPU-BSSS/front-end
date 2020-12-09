import React, { Component } from 'react'
import { PersonalInfoMenu } from './PersonalInfoMenu'
import { PersonalInfo } from './PersonalInfo'
import './Container.css'
import { connect } from 'react-redux'
import { getUserInfoAsync } from '../../@redux/actions_async'
import { Route, Switch as SwitchRouter } from 'react-router'

class ProfileBody extends Component {

  componentWillMount () {
    this.props.getUserInfoAsync()
  }

  render () {
    return (
      <div className="ProfileBody">
        <PersonalInfoMenu/>
        <SwitchRouter>
          <Route path="info" component={PersonalInfoContainer}/>}/>
        </SwitchRouter>
      </div>
    )
  }
}

let PersonalInfoContainer = props => <PersonalInfo {...props.userInfo}/>

PersonalInfoContainer = connect(
  state => ({
    userInfo: state['UserState']
  })
)(PersonalInfoContainer)

ProfileBody = connect(
  () => {},
  { getUserInfoAsync }
)(ProfileBody)

export { ProfileBody }