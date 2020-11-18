import React, { Component } from 'react'
import './ReleaseBlogComponents.css'

export class ToolBarItem extends Component {

  render () {
    return (
      <div className="ToolBarItem" style={{
        height: 75,
        width: 60
      }}>
        <div style={{
          width: 50,
          height: 50
        }}>{this.props.icon}</div>
        <div style={{
          width: 50,
          height: 15
        }}>{this.props.text}</div>
      </div>
    )
  }
}