import React, { Component } from 'react'
import { BlogEditor } from '../components/editblog-components/BlogEditor'

export class BlogEditPage extends Component {

  render () {
    return (
      <div style={{width: '100%'}} className="page-blog-edit">
        <BlogEditor/>
      </div>
    )
  }
}