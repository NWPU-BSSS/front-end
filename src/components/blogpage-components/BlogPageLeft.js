import React, { Component } from 'react'
import './BlogPageLeft.css'
import { BlogCategory } from './BlogCategory'
import { BloggerPanel } from './BloggerPanel'
import { ClassificationColumn } from './ClassificationColumn'

export class BlogPageLeft extends Component {

  render () {
    return (
      <div className="BlogPageLeft">
        {this.props.children}
      </div>
    )
  }
}