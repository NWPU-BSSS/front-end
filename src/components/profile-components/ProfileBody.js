import React, { Component } from 'react'
import { ProfileMenu } from './ProfileMenu'
import { PersonalInfo } from './PersonalInfo'
import './Container.css'
import { connect } from 'react-redux'
import { getUserInfoAsync } from '../../@redux/actions_async'
import { Redirect, Route, Switch as SwitchRouter } from 'react-router'
import { MyBlogs } from './MyBlogs'
import { MyFavorite } from './MyFavorite'
import { MySubscribes } from './MySubscribes'
import { ProfileInfo } from './ProfileInfo'

class ProfileBody extends Component {

  componentWillMount () {
    this.props.getUserInfoAsync()
  }

  render () {
    return (
      <div className="ProfileBody">
        <ProfileMenu/>
        <ProfileInfo>
          <SwitchRouter>
            <Route path="/profile/info"><PersonalInfo {...this.props.userInfo}/></Route>
            <Route path="/profile/fav"><MyBlogs {...this.props.userInfo}/></Route>
            <Route path="/profile/fav"><PersonalInfo {...this.props.userInfo}/></Route>
            <Route path="/profile/fav"><PersonalInfo {...this.props.userInfo}/></Route>
            <Route path="/profile/fav"><PersonalInfo {...this.props.userInfo}/></Route>
            <Redirect to="/profile/info"/>
          </SwitchRouter>
        </ProfileInfo>
      </div>
    )
  }
}

ProfileBody = connect(
  state => ({
    userInfo: state.$UserInfoState.userInfo
  }),
  { getUserInfoAsync }
)(ProfileBody)

export { ProfileBody }