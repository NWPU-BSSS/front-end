import React, { Component } from 'react'
import './ContentNavBar.css'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function ContentNavBarItem (props) {
  return (
    <Link className="ContentNavBarItem" to={props.to}>{props.name}</Link>
  )
}

export class ContentNavBar extends Component {
  render () {

    return (
      <div className="ContentNavBar">
        <ContentNavBarItem to={`blog`} name="Blog"/>
        {/*<ContentNavBarItem to={`resource`} name="Resources"/>*/}
        <ContentNavBarItem to={`fans`} name="Fans"/>
        <ContentNavBarItem to={`fav`} name="Favorite"/>
        <ContentNavBarItem to={`subscribe`} name="Subscribe"/>
      </div>
    )
  }

}