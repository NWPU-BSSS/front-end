import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { getBaseInfoAsync, getRecommendBlogListAsync } from '../@redux/actions_async'
import './HomePage.css'

class HomePage extends Component {

  static propTypes = {
    isLogin: PropTypes.bool,
    getBaseInfoAsync: PropTypes.func,
    blogList: PropTypes.array
  }

  componentWillMount () {
    if (this.props.isLogin) {
      this.props.getBaseInfoAsync()
      this.props.getRecommendBlogListAsync()
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
    isLogin: state['UserState'].userId !== -1,
    blogList: state.BlogList.blogList
  }),
  { getBaseInfoAsync, getRecommendBlogListAsync }
)(HomePage)

export { HomePage }