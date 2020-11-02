import React, { Component } from 'react'

export class Hexagon extends Component {

  render () {
    return (
      <div className="hexagon-container" style={{
        border: '3px solid #6AB8E7',
        borderRadius: '50%',
        padding: 10
      }}>
        <span>{this.props.children}</span>
      </div>
    )
  }
}