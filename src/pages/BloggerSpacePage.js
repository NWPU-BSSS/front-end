import React, { Component } from 'react'
import { ContentNavBar } from '../components/blogger-space-components/ContentNavBar'
import { BlogList } from '../components/bloggerspace-components/BlogList'

export class BloggerSpacePage extends Component {

  render () {
    return (

    <div>
      <ContentNavBar/>
      <BlogList/>
    </div>
    )
  }
}