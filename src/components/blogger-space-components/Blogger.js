import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Tag, Button } from 'antd'
import avatar from '../../assets/img/logo192.png'
import './Blogger.css'

export class Blogger extends Component {

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    codeAge: PropTypes.number.isRequired,
    introduction: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className="Blogger">
        <div className="left">
          <Avatar size={64} src={this.props.avatar}/>
          <Tag color="red" style={{marginRight: 0}}>CA{this.props.codeAge}</Tag>
        </div>
        <div className="main">
          <div className="username">
            {this.props.nickname}
          </div>
          <div className="userinfo">
            <div className="verify">
              {this.props.className}
            </div>
            <div className="introduction">
              {this.props.introduction}
            </div>
          </div>
        </div>
        <div className="right">
          <Button danger>Chat</Button>
          <Button danger>Subscribe</Button>
        </div>
      </div>
    )
  }
}