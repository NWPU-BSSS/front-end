import React, { Component } from 'react'
import { NavMenuDropdown } from './NavMenuDropdown'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import './UserHasLoggedIn.css'

export class NavMenuAvatar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      followCount: 0,
      fanCount: 0,
      name: '孙悟空',
      level: 1
    }

    this.handleClickAvatar = this.handleClickAvatar.bind(this)
  }

  handleClickAvatar(){
    this.setState({
      showOption: true
    })
  }

  render () {
    return (
      <li className="nav-item head-avatar dropdown">
        <div className="nav-link dropdown-toggle" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img style={{
            width: 25,
            height: 25
          }} src={'logo192.png'} alt="avatar"/>
        </div>
        <div className="personal-option dropdown-menu" style={{ backgroundColor: '#343a40' }} aria-labelledby="navbarDropdown">
          <div className="dropdown-item no-hover bsss-name w-100">{this.state.name}</div>
          <div className="dropdown-item no-hover">
            <div className="bsss-lv w-100">成长体系</div>
            <a className="bsss-lv w-100">Lv{this.state.level}</a>
          </div>
          <div className="dropdown-item no-hover">
            <a className="bsss-fl w-100">
              <div>关注</div>
              <div>{this.state.followCount}</div>
            </a>
            <a className="bsss-fl w-100">
              <div>粉丝</div>
              <div>{this.state.fanCount}</div>
            </a>
          </div>
          <a className="dropdown-item">
            <UserOutlined/>
            <div className="bsss-option">个人中心</div>
          </a>
          <a className="dropdown-item">
            <EditOutlined/>
            <div className="bsss-option">我的博客</div>
          </a>
          <a className="dropdown-item">
            <UserOutlined/>
            <div className="bsss-option">我的学院</div>
          </a>
          <a className="dropdown-item">
            <UserOutlined/>
            <div className="bsss-option">我的下载</div>
          </a>
          <a className="dropdown-item">
            <UserOutlined/>
            <div className="bsss-option">帮助</div>
          </a>
          <a className="dropdown-item">
            <UserOutlined/>
            <div className="bsss-option" onClick={this.props.onLogout}>退出</div>
          </a>
        </div>
      </li>
    )
  }
}