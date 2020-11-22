import React, { Component } from 'react'
import { EyeOutlined } from '@ant-design/icons'
import { BlogList } from '../components/bloggerspace-components/BlogList'

export class BloggerSpacePage extends Component {

  render () {
    return (
      <div>
        <BlogList/>
        <h1>博主空间页面</h1>
      </div>

    )
  }
}