import React, { Component } from 'react'
import { BlogContent } from './BlogContent'
import './BlogPageMain.css'
import { ThumbBox } from './ThumbBox'

export class BlogPageMain extends Component {

  render () {
    return (
      <div className="BlogPageMain">
        <BlogContent/>
        <ThumbBox/>
      </div>
    )
  }
}