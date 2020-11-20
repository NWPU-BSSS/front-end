import React, { Component } from 'react'
import './LeftCard.css'

export class LeftCard extends Component {

  render () {
    return (
      <div className="LeftCard">
        <div className="header">{this.props.header}</div>
        <div className="body">{this.props.body}</div>
      </div>
    )
  }
}