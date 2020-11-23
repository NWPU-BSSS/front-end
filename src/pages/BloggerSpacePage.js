import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { BlogList } from '../components/blogger-space-components/BlogList'
import { Blogger } from '../components/blogger-space-components/Blogger'

export class BloggerSpacePage extends Component {

  render () {
    return (

    <div>
      <Blogger/>
      <ContentNavBar/>
      <BlogList/>
    </div>
    )
  }
}