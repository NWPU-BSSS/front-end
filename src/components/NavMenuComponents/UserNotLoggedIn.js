import React, { Component } from 'react'

export class UserNotLoggedIn extends Component {

  render () {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link btn btn-outline-danger" href="#">登陆</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn btn-outline-danger" style={{ color: 'orange' }} href="#">快速注册</a>
        </li>
      </ul>
    )
  }
}