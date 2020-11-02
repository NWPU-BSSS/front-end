import React, { Component } from 'react'
import { Card } from 'antd'
import { Avatar } from 'antd';

import './UserCard.css'
import { Hexagon } from './Hexagon'

export class UserCard extends Component {

  render () {

    return (
      <Card className="user-card">
        <div className="card-top">
          <div className="top-left">
            <div className="card-ava">
              <Avatar size={48} src="logo192.png"/>
              <div>码龄2年</div>
            </div>
            <div className="card-username">Chyoic</div>
          </div>
          <div>
            <Hexagon>Lv6</Hexagon>
          </div>
        </div>
        <div className="card-bottom">
          <div className="bottom-item">
            <div className="item-top">5</div>
            <div className="item-bottom">博客</div>
          </div>
          <div className="bottom-item">
            <div className="item-top">2</div>
            <div className="item-bottom">关注</div>
          </div>
          <div className="bottom-item">
            <div className="item-top">4</div>
            <div className="item-bottom">粉丝</div>
          </div>
        </div>
      </Card>
    )
  }
}