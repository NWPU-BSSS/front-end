import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { BlogList } from '../components/blogger-space-components/BlogList'
import { Blogger } from '../components/blogger-space-components/Blogger'
import { Redirect, Switch as SwitchRouter } from 'react-router-dom'
import { Route } from 'react-router'

export class BloggerSpacePage extends Component {

  render () {
    return (
      <div>
        <Blogger/>
        <ContentNavBar/>
        <SwitchRouter>
          <Route path="/space/blog" component={BlogList}/>
          <Route path="/space/resource" component={Resource}/>
          <Redirect to="/space/blog"/>
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