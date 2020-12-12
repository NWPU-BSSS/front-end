import React, { Component } from 'react'
import { NavMenuDropdown } from './NavMenuDropdown'
import { btnDanger } from './@button-style'
import { NavUserPanel } from './NavUserPanel'
import PropTypes from 'prop-types'
import './NavLogged.css'
import { Link } from 'react-router-dom'
import { Avatar, Button } from 'antd'

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
          menuStyle={{
            justifyContent: 'center',
            backgroundColor: '#ff4d4f'
          }}
          title={
            <Button danger type="primary">{CreationCentre}</Button>
          }>
          <Link to="/release-blog">{WriteBlog}</Link>
          <a>{UploadResource}</a>
        </NavMenuDropdown>
        <Link to="/profile/fav">{Favorite}</Link>
        {/*<a>{History}</a>*/}
        <NavMenuDropdown title={
          <div className="head-avatar">
            <Avatar src={this.props.avatar} alt="Avatar">
              {this.props.nickname}
            </Avatar>
          </div>
        }>
          <NavUserPanel {...this.props} language={userPanelLanguage} onLogout={() => this.props.logout()}
                        username={''}/>
        </NavMenuDropdown>
      </div>
    )
  }
}

export { NavLogged }