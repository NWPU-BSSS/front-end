import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { getBadgeNumAsync, getBaseInfoAsync, getRecommendBlogListAsync } from '../@redux/actions_async'
import './HomePage.css'

class HomePage extends Component {

  static propTypes = {
    blogList: PropTypes.array,
    getBadgeNumAsync: PropTypes.func,
    getBaseInfoAsync: PropTypes.func,
    getRecommendBlogListAsync: PropTypes.func,
    isLogin: PropTypes.bool
  }

  componentWillMount () {
    if (this.props.isLogin) {
      this.props.getBaseInfoAsync()
      this.props.getRecommendBlogListAsync()
      this.props.getBadgeNumAsync()
    }
  }

  render () {
    if (!this.props.isLogin) {
      return <Redirect to="/login"/>
    }

    return (
      <div className="HomePage">
        <HomePageLeft/>
        <HomePageCenter blogList={this.props.blogList}/>
        <HomePageRight/>
      </div>
    )
  }
}

HomePage = connect(
  state => ({
    isLogin: state['AccessToken'] !== '',
    blogList: state.BlogList.blogList,
    user: state['UserState']
  }),
  { getBaseInfoAsync, getRecommendBlogListAsync, getBadgeNumAsync }
)(HomePage)

export { HomePage }