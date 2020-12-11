import React, { Component } from 'react'
import { Avatar, Card } from 'antd'
import PropTypes from 'prop-types'
import './UserCard.css'
import { Hexagon } from './Hexagon'
import { Link } from 'react-router-dom'

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
    const { nickname, codeAge, fanNum, blogNum, level, avatar, followNum } = this.props
    return (
      <Card className="user-card">
        <div className="card-top">
          <div className="top-left">
            <div className="card-ava">
              <Avatar size={48} src={avatar}/>
              <div className="code-age">CA{codeAge}</div>
            </div>
            <Link  to="/profile/info" className="card-username">{nickname}</Link>
          </div>
          <div>
            <Hexagon>Lv{level}</Hexagon>
          </div>
        </div>
        <div className="card-bottom">
          <Link to="/profile/blogs" className="bottom-item">
            <div className="item-top">{blogNum}</div>
            <div className="item-bottom">Blogs</div>
          </Link>
          <Link to="/profile/subscribe" className="bottom-item">
            <div className="item-top">{followNum}</div>
            <div className="item-bottom">Subscribe</div>
          </Link>
          <Link to="/profile/fans" className="bottom-item">
            <div className="item-top">{fanNum}</div>
            <div className="item-bottom">Fans</div>
          </Link>
        </div>
      </Card>
    )
  }
}