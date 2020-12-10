import React, { Component } from 'react'
import { Avatar, Tag, Button } from 'antd'
import avatar from '../../assets/img/logo192.png'
import './Blogger.css'

export class Blogger extends Component {

  render () {
    return (
      <div className="Blogger">
        <div className="left">
          <Avatar size={96} src={avatar}/>
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
          <Button danger>私信</Button>
          <Button danger>关注</Button>
        </div>
      </div>
    )
  }
}