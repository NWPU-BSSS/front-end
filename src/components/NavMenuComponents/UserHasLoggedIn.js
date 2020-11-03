import React, { Component } from 'react'
import { NavMenuDropdown } from './NavMenuDropdown'
import { NavMenuAvatar } from './NavMenuAvatar'

export class UserHasLoggedIn extends Component {

  render () {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="btn btn-danger">创作中心</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">收藏</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">历史</a>
        </li>
        <NavMenuAvatar onLogout={this.props.onLogout}/>
      </ul>
    )
  }
}