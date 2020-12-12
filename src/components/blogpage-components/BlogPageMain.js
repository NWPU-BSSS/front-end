import React, { Component } from 'react'
import './BlogPageMain.css'

export class BlogPageMain extends Component {
  render () {
    return (
      <div className="BlogPageMain">
        {this.props.children}
      </div>
    )
  }
}