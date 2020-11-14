import React, { Component } from 'react'
import './NavMenuDropdown.css'

export class NavMenuDropdown extends Component {

  render () {
    return (
      <div className="bs-nav-dropdown">
        <div className="bs-nav-dropdown-toggle">
          {this.props.title}
        </div>
        <div style={this.props.menuStyle} className="bs-nav-dropdown-menu">
          {this.props.children}
        </div>
      </div>
    )
  }
}

