import React, { Component } from 'react'
import './ContentNavBar.css'
import { Link, NavLink } from 'react-router-dom'

function ContentNavBarItem (props) {
  return (
    <Link className="ContentNavBarItem" to={props.to}>{props.name}</Link>
  )
}

export class ContentNavBar extends Component {

  render () {
    return (
      <div className="ContentNavBar">
        <ContentNavBarItem to="/space/blog" name={'博客'}/>
        <ContentNavBarItem to="/space/resource" name={'资源'}/>
        <ContentNavBarItem name={'回答'}/>
        <ContentNavBarItem name={'收藏'}/>
        <ContentNavBarItem name={'关注'}/>
      </div>
    )
  }

}