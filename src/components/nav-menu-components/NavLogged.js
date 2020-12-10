import React, { Component } from 'react'
import { NavMenuDropdown } from './NavMenuDropdown'
import { btnDanger } from './@button-style'
import { NavUserPanel } from './NavUserPanel'
import logo from '../../assets/img/logo192.png'
import PropTypes from 'prop-types'
import './NavLogged.css'
import { Link } from 'react-router-dom'

class NavLogged extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
    language: PropTypes.object
  }

  render () {
    const { CreationCentre, WriteBlog, WriteCode, UploadResource, Favorite, History } = this.props.language
    const userPanelLanguage = { ...this.props.language }

    return (
      <div className="NavLogged">
        <NavMenuDropdown
          menuStyle={{ justifyContent: 'center',
            backgroundColor: '#aa3131' }}
          title={
            <div style={{
              ...btnDanger,
              margin: '0'
            }}>{CreationCentre}</div>
          }>
          <Link to="/release-blog">{WriteBlog}</Link>
          <a>{WriteCode}</a>
          <a>{UploadResource}</a>
        </NavMenuDropdown>
        <a>{Favorite}</a>
        <a>{History}</a>
        <NavMenuDropdown title={
          <div className="head-avatar">
            <img src={logo} alt="Avatar"/>
          </div>
        }>
          <NavUserPanel {...this.props} language={userPanelLanguage} onLogout={() => this.props.logout()} username={''}/>
        </NavMenuDropdown>
      </div>
    )
  }
}

export { NavLogged }