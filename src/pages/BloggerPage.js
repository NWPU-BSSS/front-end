import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { BlogList } from '../components/blogger-space-components/BlogList'
import { Blogger } from '../components/blogger-space-components/Blogger'
import { Redirect, Switch as SwitchRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { connect } from 'react-redux'

export class BloggerPage extends Component {

  componentWillMount () {
    console.log(this.props.match.params)
  }

  render () {

    let { bloggerId } = this.props.match.params

    return (
      <div>
        <Blogger {...this.props.bloggerInfo}/>
        <ContentNavBar bloggerId={bloggerId}/>
        <SwitchRouter>
          <Route path="/blogger/:bloggerId/blog" component={BlogList}/>
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
  state => {
    // let {bloggerInfo} =
    return {

    }
  }
)(BloggerPage)

function Resource () {
  return (
    <div>资源</div>
  )
}