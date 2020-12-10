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
import {HomeBlogList} from "../homepage-components/HomeBlogList";
import PropTypes from "prop-types";
import {HomePageCenter} from "../homepage-components/HomePageCenter";
import {MyFans} from "./MyFans";
import {BlogList} from "../blogger-space-components/BlogList";

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
            <Route path="/profile/fav"><MyFavorite/></Route>
            <Route path="/profile/subscribe"><MySubscribes/></Route>
            <Route path="/profile/fans"><PersonalInfo {...this.props.userInfo}/></Route>
            <Route path="/profile/blogs"><MyBlogs/></Route>
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