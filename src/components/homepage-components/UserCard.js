import React, { Component } from 'react'
import { Card } from 'antd'
import { Avatar } from 'antd';
import PropTypes from 'prop-types'
import './UserCard.css'
import { Hexagon } from './Hexagon'

export class UserCard extends Component {

  static propTypes = {
    blogNum: PropTypes.number,
    codeAge: PropTypes.number,
    fanNum: PropTypes.number,
    followNum: PropTypes.number,
    level: PropTypes.number,
    nickname: PropTypes.string
  }

  render () {

    return (
      <Card className="user-card">
        <div className="card-top">
          <div className="top-left">
            <div className="card-ava">
              <Avatar size={48} src="logo192.png"/>
              <div>Code Age {this.props.codeAge} Year</div>
            </div>
            <div className="card-username">{this.props.nickname}</div>
          </div>
          <div>
            <Hexagon>Lv{this.props.level}</Hexagon>
          </div>
        </div>
        <div className="card-bottom">
          <div className="bottom-item">
            <div className="item-top">{this.props.blogNum}</div>
            <div className="item-bottom">Blogs</div>
          </div>
          <div className="bottom-item">
            <div className="item-top">{this.props.followNum}</div>
            <div className="item-bottom">Follow</div>
          </div>
          <div className="bottom-item">
            <div className="item-top">{this.props.fanNum}</div>
            <div className="item-bottom">Fans</div>
          </div>
        </div>
      </Card>
    )
  }
}