import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { BlogList } from '../components/blogger-space-components/BlogList'
import { Blogger } from '../components/blogger-space-components/Blogger'
import { Redirect, Switch as SwitchRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { getBloggerBlogsAsync, getBloggerInfoAsync } from '../@redux/actions_async'
import { BaseBlogList } from '../components/base/BaseBlogList'

export class BloggerPage extends Component {

  componentWillMount () {
    let { bloggerId } = this.props.match.params
    this.props.getBloggerInfoAsync(bloggerId)
    this.props.getBloggerBlogsAsync({userId: bloggerId, page: 0})
  }

  render () {

    let { bloggerId } = this.props.match.params

    return (
      <div>
        <Blogger {...this.props.bloggerInfo}/>
        <ContentNavBar bloggerId={bloggerId}/>
        <SwitchRouter>
          <Route path="/blogger/:bloggerId/blog">
            <BaseBlogList blogList={this.props.bloggerBlogs}/>
          </Route>
          <Route path="/blogger/:bloggerId/resource" component={Resource}/>
          <Route path="/blogger/:bloggerId/fans" component={Resource}/>
          <Route path="/blogger/:bloggerId/fav" component={Resource}/>
          <Route path="/blogger/:bloggerId/subscribe" component={Resource}/>
          <Redirect to="/blogger/:bloggerId/blog"/>
        </SwitchRouter>
      </div>
    )
  }
}

BloggerPage = connect(
  ({ $BLoggerPageState: { bloggerInfo, bloggerBlogs } }) => ({
    bloggerInfo,
    bloggerBlogs
  }),
  { getBloggerInfoAsync, getBloggerBlogsAsync }
)(BloggerPage)

function Resource () {
  return (
    <div>资源</div>
  )
}