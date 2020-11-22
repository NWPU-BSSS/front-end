import React, { Component } from 'react'
import './ContentNavBar.css'

function ShowItem (props) {
  return (
    <div className={'content-nav-bar-item'}>
      <a href={props.action}>{props.name}</a>
    </div>
  )
}

export class ContentNavBar extends Component {

  render () {
    return (
      <div className={'content-nav-bar'}>
        <ShowItem name={'博客'}/>
        <ShowItem name={'资源'}/>
        <ShowItem name={'回答'}/>
        <ShowItem name={'收藏'}/>
        <ShowItem name={'关注'}/>
      </div>
    )
  }

}