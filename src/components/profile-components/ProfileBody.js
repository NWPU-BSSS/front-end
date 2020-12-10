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
import { ProfileInfoContainer } from './ProfileInfoContainer'
import { ProfileMenuItem } from './ProfileMenuItem'
import { MyFans } from './MyFans'

const languageHere = {
  PersonalInfo: '个人资料',
  AccountSecurity: '账号安全',
  Collection: '我的收藏',
  Follower: '我的关注',
  Fans: '我的粉丝',
  MyBlog: '我的博客',
  MyDownload: '我的下载',
  MyAnswer: '我的回答',
  MyCollege: '我的学院',
}

class ProfileBody extends Component {

  componentWillMount () {
    this.props.getUserInfoAsync()
  }

  render () {
    // const { PersonalInfo, AccountSecurity, Collection, Follower, Fans, MyBlog, MyDownload, MyAnswer, MyCollege} = languageHere;


    return (
      <div className="ProfileBody">
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
            <Route path="/profile/blogs"><MyBlogs {...this.props.userInfo}/></Route>
            <Route path="/profile/favs"><MyFavorite {...this.props.userInfo}/></Route>
            <Route path="/profile/subscribes"><MySubscribes {...this.props.userInfo}/></Route>
            <Route path="/profile/fans"><MyFans {...this.props.userInfo}/></Route>
            <Redirect to="/profile/info"/>
          </SwitchRouter>
        </ProfileInfoContainer>
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