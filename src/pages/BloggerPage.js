import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { Blogger } from '../components/blogger-space-components/Blogger'
import { Redirect, Switch as SwitchRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { getBloggerBlogsAsync, getBloggerFavBlogsAsync, getBloggerInfoAsync } from '../@redux/actions_async'
import { BaseBlogList } from '../components/base/BaseBlogList'
import { BloggerPageBody } from '../components/blogger-space-components/BloggerPageBody'
import { Layout } from '../components/Layout'

export class BloggerPage extends Component {

  componentWillMount () {
    console.log(this.props)
    let { bloggerId } = this.props.match.params
    this.props.getBloggerInfoAsync(bloggerId)
    this.props.getBloggerBlogsAsync({ userId: bloggerId, page: 0 })
    this.props.getBloggerFavBlogsAsync(bloggerId)
  }

  render () {

    let { bloggerId } = this.props.match.params

    return (
      <Layout>
        <Blogger {...this.props.bloggerInfo}/>
        <ContentNavBar bloggerId={bloggerId}/>
        <BloggerPageBody>
          <SwitchRouter>
            <Route path="/blogger/:bloggerId/blog">
              <BaseBlogList blogList={this.props.bloggerBlogs}/>
            </Route>
            <Route path="/blogger/:bloggerId/resource" component={Resource}/>
            <Route path="/blogger/:bloggerId/fans" component={Resource}/>
            <Route path="/blogger/:bloggerId/fav">
              <BaseBlogList blogList={this.props.bloggerFavBlogs}/>
            </Route>
            <Route path="/blogger/:bloggerId/subscribe" component={Resource}/>
            <Redirect to="/blogger/:bloggerId/fav"/>
          </SwitchRouter>
        </BloggerPageBody>
      </Layout>
    )
  }
}

BloggerPage = connect(
  ({ $BLoggerPageState: { bloggerInfo, bloggerBlogs, bloggerFavBlogs } }) => ({
    bloggerInfo,
    bloggerBlogs,
    bloggerFavBlogs
  }),
  { getBloggerInfoAsync, getBloggerBlogsAsync, getBloggerFavBlogsAsync }
)(BloggerPage)

function Resource () {
  return (
    <div>资源</div>
  )
}