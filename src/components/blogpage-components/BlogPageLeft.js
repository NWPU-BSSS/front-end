import React, { Component } from 'react'
import { BlogCategory } from './BlogCategory'

export class BlogPageLeft extends Component {

  render () {
    return (
      <div style={{
        minWidth: '250px',
        outline: '1px red solid',
        height: '1200px'
      }}>
        <BlogCategory/>
      </div>
    )
  }
}