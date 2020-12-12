import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { Blogger } from '../components/blogger-space-components/Blogger'
import { Redirect, Switch as SwitchRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import {
  getBloggerBlogsAsync, getBloggerFansAsync,
  getBloggerFavBlogsAsync,
  getBloggerInfoAsync, getBloggerPageSubscribeStatusAsync,
  getBloggerSubscribesAsync
} from '../@redux/actions_async'
import { BaseBlogList } from '../components/base/BaseBlogList'
import { BloggerPageBody } from '../components/blogger-space-components/BloggerPageBody'
import { Layout } from '../components/Layout'
import FanList from '../components/base/FanList'

export class BloggerPage extends Component {

  componentWillMount () {
    console.log(this.props)
    let { bloggerId } = this.props.match.params
    this.props.getBloggerInfoAsync(bloggerId)
    this.props.getBloggerBlogsAsync({ userId: bloggerId, page: 0 })
    this.props.getBloggerFavBlogsAsync(bloggerId)
    this.props.getBloggerSubscribesAsync(bloggerId)
    this.props.getBloggerFansAsync(bloggerId)
    this.props.getBloggerPageSubscribeStatusAsync(bloggerId)
  }

  render () {

    let { bloggerId } = this.props.match.params
    if (bloggerId === this.props.userId) return <Redirect to="/profile/info"/>
    debugger

    return (
      <Layout>
        <Blogger {...this.props.bloggerInfo} bloggerId={bloggerId}/>
        <ContentNavBar bloggerId={bloggerId}/>
        <BloggerPageBody>
          <SwitchRouter>
            <Route path="/blogger/:bloggerId/blog">
              <BaseBlogList blogList={this.props.bloggerBlogs}/>
            </Route>
            <Route path="/blogger/:bloggerId/fans">
              <FanList fanList={this.props.fans}/>
            </Route>
            <Route path="/blogger/:bloggerId/fav">
              <BaseBlogList blogList={this.props.bloggerFavBlogs}/>
            </Route>
            <Route path="/blogger/:bloggerId/subscribe">
              <FanList fanList={this.props.subscribes}/>
            </Route>
            <Redirect to="/blogger/:bloggerId/fav"/>
          </SwitchRouter>
        </BloggerPageBody>
      </Layout>
    )
  }
}

BloggerPage = connect(
  ({ $BLoggerPageState: { bloggerInfo, bloggerBlogs, bloggerFavBlogs, subscribes, fans }, $UserState: {userId} }) => ({
    bloggerInfo,
    bloggerBlogs,
    bloggerFavBlogs,
    fans,
    subscribes,
    userId
  }),
  {
    getBloggerInfoAsync,
    getBloggerFansAsync,
    getBloggerSubscribesAsync,
    getBloggerBlogsAsync,
    getBloggerFavBlogsAsync,
    getBloggerPageSubscribeStatusAsync
  }
)(BloggerPage)