import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
  getAnnouncementAsync,
  getBadgeNumAsync,
  getBaseInfoAsync, getFollowedBloggerBlogListAsync, getMyBrowseAsync, getRecentBlogListAsync, getRecommendBlogListAsync
} from '../@redux/actions_async'
import './HomePage.css'
import { QuickEntry } from '../components/homepage-components/QuickEntry'
import { TodayRecommend } from '../components/homepage-components/TodayRecommend'
import { RecentBrowse } from '../components/homepage-components/RecentBrowse'
import { UserCard } from '../components/homepage-components/UserCard'
import { MessageOption } from '../components/homepage-components/MessageOption'
import { Layout } from '../components/Layout'

class HomePage extends Component {

  static propTypes = {
    recommendBlogList: PropTypes.array,
    getBadgeNumAsync: PropTypes.func,
    getBaseInfoAsync: PropTypes.func,
    getRecommendBlogListAsync: PropTypes.func,
    isLogin: PropTypes.bool
  }

  componentWillMount () {
    if (this.props.isLogin) {
      this.props.getBaseInfoAsync()
      this.props.getRecommendBlogListAsync()
      this.props.getRecentBlogListAsync()
      this.props.getBadgeNumAsync()
      this.props.getAnnouncementAsync()
      this.props.getFollowedBloggerBlogListAsync()
      this.props.getMyBrowseAsync()
    }
  }

  render () {
    if (!this.props.isLogin) {
      return <Redirect to="/login"/>
    }

    return (
      <Layout>
        <div className="HomePage">
          <HomePageLeft>
            <QuickEntry/>
            <TodayRecommend {...this.props.announcement}/>
            <RecentBrowse/>
          </HomePageLeft>
          <HomePageCenter/>
          <HomePageRight>
            <UserCard {...this.props.baseInfo}/>
            <MessageOption {...this.props.badgeNum}/>
          </HomePageRight>
        </div>
      </Layout>
    )
  }
}

HomePage = connect(
  ({
    $HomePageState: { browse, announcement },
    $UserInfoState: { badgeNum, baseInfo },
    $UserState: { userId }
  }) =>
    ({
      isLogin: userId !== -1,
      announcement,
      browse,
      badgeNum,
      baseInfo
    }),
  {
    getBaseInfoAsync,
    getFollowedBloggerBlogListAsync,
    getRecommendBlogListAsync,
    getBadgeNumAsync,
    getAnnouncementAsync,
    getRecentBlogListAsync,
    getMyBrowseAsync
  }
)(HomePage)

export { HomePage }