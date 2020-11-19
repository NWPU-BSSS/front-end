import React, { Component } from 'react'
import { NavMenuDropdown } from './NavMenuDropdown'
import { btnDanger } from './@button-style'
import { NavUserPanel } from './NavUserPanel'
import logo from '../../assets/img/logo192.png'
// import PropTypes from 'prop-types'

import './NavLogged.css'
import { connect } from 'react-redux'
import { logout } from '../../@redux/actions'
import { Link } from 'react-router-dom'

class NavLogged extends Component {

  // static propTypes = {
  //   username: PropTypes.string.isRequired,
  //   logout: PropTypes.func.isRequired
  // }

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

          <Link to="/release-blog">写博客</Link>
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
          <NavUserPanel onLogout={() => this.props.logout()} username={this.props.username || ''}/>
        </NavMenuDropdown>
      </div>
    )
  }
}

NavLogged = connect(
  state => ({ username: state.userState.username }),
  { logout }
)(NavLogged)

export { NavLogged }