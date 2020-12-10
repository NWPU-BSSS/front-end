import React, { Component } from 'react'
import { ProfileMenu } from '../components/profile-components/ProfileMenu'
import { Redirect, Route, Switch as SwitchRouter } from 'react-router'
import { PersonalInfo } from '../components/profile-components/PersonalInfo'
import { MyFavorite } from '../components/profile-components/MyFavorite'
import { MySubscribes } from '../components/profile-components/MySubscribes'
import { MyBlogs } from '../components/profile-components/MyBlogs'
import { UserSpaceTitle } from '../components/profile-components/UserSpaceTitle'
import { MyFans } from '../components/profile-components/MyFans'
import { ProfileMenuItem } from '../components/profile-components/ProfileMenuItem'
import { ProfileInfoContainer } from '../components/profile-components/ProfileInfoContainer'
import { ProfileBody } from '../components/profile-components/ProfileBody'
import { connect } from 'react-redux'
import { getUserInfoAsync } from '../@redux/actions_async'

export class ProfilePage extends Component {
  componentWillMount () {
    this.props.getUserInfoAsync()
  }

  render () {
    return (
      <div>
        <UserSpaceTitle {...this.props.userInfo}/>
        <ProfileBody>
          <ProfileMenu>
            <ProfileMenuItem title={`My Profile`} action="/profile/info"/>
            <ProfileMenuItem title={`My Collection`} action="/profile/fav"/>
            <ProfileMenuItem title={`My Follower`} action="/profile/subscribe"/>
            <ProfileMenuItem title={`My Fans`} action="/profile/fans"/>
            <ProfileMenuItem title={`My Blog`} action="/profile/blogs"/>
            <ProfileMenuItem title={`My Download`}/>
            <ProfileMenuItem title={`My Q&A`}/>
            <ProfileMenuItem title={`My School`}/>
            <ProfileMenuItem title={`Account Security`} action="/profile/safe"/>
          </ProfileMenu>
          <ProfileInfoContainer>
            <SwitchRouter>
              <Route path="/profile/info"><PersonalInfo {...this.props.userInfo}/></Route>
              <Route path="/profile/info"><MyBlogs {...this.props.userInfo}/></Route>
              <Route path="/profile/info"><MyFavorite {...this.props.userInfo}/></Route>
              <Route path="/profile/info"><MySubscribes {...this.props.userInfo}/></Route>
              <Route path="/profile/info"><MyFans {...this.props.userInfo}/></Route>
              <Redirect to="/profile/info"/>
            </SwitchRouter>
          </ProfileInfoContainer>
        </ProfileBody>
      </div>
    )
  }
}

ProfilePage = connect(
  state => ({
    userInfo: state.$UserInfoState.userInfo
  }),
  { getUserInfoAsync }
)(ProfilePage)