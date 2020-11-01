import React, { Component } from 'react'

export class NavMenuSearch extends Component {

  render () {
    return (
      <li className="nav-item">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="搜索" aria-label="Search"/>
          <button className="btn btn-danger my-2 my-sm-0" type="submit">搜索</button>
        </form>
      </li>
    )
  }
}