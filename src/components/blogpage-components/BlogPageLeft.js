import React, { Component } from 'react'
import './BlogPageLeft.css'
import { BlogCategory } from './BlogCategory'
import { BloggerPanel } from './BloggerPanel'

export class BlogPageLeft extends Component {

  render () {
    return (
      <div className="BlogPageLeft">
        <BloggerPanel/>
        {/*<BlogCategory/>*/}
      </div>
    )
  }
}