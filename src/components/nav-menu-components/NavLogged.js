import React, { Component } from 'react'
import { NavMenuDropdown } from './NavMenuDropdown'
import { NavMenuAvatar } from './NavMenuAvatar'
import { btnDanger } from './@button-style'

import './NavLogged.css'
import { Avatar } from 'antd'

import logo from '../../assets/img/logo192.png'
import { NavUserPanel } from './NavUserPanel'

export class NavLogged extends Component {

  render () {
    return (
      <div className="bs-nav-logged">
        <NavMenuDropdown
          menuStyle={{
            justifyContent: 'center',
            backgroundColor: '#aa3131'
          }}
          title={
            <div style={{
              ...btnDanger,
              margin: '0'
            }}>创作中心</div>
          }>

          <a>写博客</a>
          <a>写代码</a>
          <a>上传资源</a>
        </NavMenuDropdown>
        <a>收藏</a>
        <a>历史</a>
        <NavMenuDropdown title={
          <div className="head-avatar">
            <img src={logo} alt="头像"/>
          </div>
        }>
          <NavUserPanel onExit={this.props.onLogOut}/>
        </NavMenuDropdown>
      </div>
    )
  }
}