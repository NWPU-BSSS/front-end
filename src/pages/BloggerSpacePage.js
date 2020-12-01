import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { BlogList } from '../components/blogger-space-components/BlogList'
import { Blogger } from '../components/blogger-space-components/Blogger'
import { Redirect, Switch as SwitchRouter } from 'react-router-dom'
import { Route } from 'react-router'

export class BloggerSpacePage extends Component {

  componentWillMount () {
    // this.props.params
  }

  render () {
    return (
      <div>
        <Blogger/>
        <ContentNavBar/>
        <SwitchRouter>
          <Route path="blog" component={BlogList}/>
          <Route path="resource" component={Resource}/>
          <Redirect to="blog"/>
        </SwitchRouter>
      </div>
    )
  }
}

function Resource () {
  return (
    <div>资源</div>
  )
}