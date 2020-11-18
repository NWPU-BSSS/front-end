import React, { Component } from 'react'
import { BlogContent } from './BlogContent'
import './BlogPageMain.css'

export class BlogPageMain extends Component {

  render () {
    return (
      <div className="BlogPageMain">
        <BlogContent/>
      </div>
    )
  }
}