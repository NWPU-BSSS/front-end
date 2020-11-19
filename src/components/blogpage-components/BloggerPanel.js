import React, { Component } from 'react'
import { Avatar, Button, Tag } from 'antd'
import avatar from '../../assets/temporary/u508.png'
import { SafetyCertificateOutlined } from '@ant-design/icons'
import './BloggerPanel.css'
import { Link } from 'react-router-dom'

export class BloggerPanel extends Component {

  render () {
    return (
      <div className="BloggerPanel">
        <div className="top">
          <div className="top-top">
            <Avatar size={56} src={avatar}/>
            <div className="username">
              userName
            </div>
          </div>
          <div className="top-bottom">
            <div>
              <Tag className="level">Lv3</Tag>
            </div>
            <div className="code-age">码龄7年</div>
            <div style={{ flexGrow: 0 }}>
              <SafetyCertificateOutlined style={{ color: '#d9001b' }}/>
            </div>
            <div>
              14011801班
            </div>
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '60px',
        }}>
          <ul className='info-list'>
            <li>
              <Link to={'/blog'}>
                <div className='info-content'>
                  1
                </div>
                <div className='info-content'>
                  原创
                </div>
              </Link>
            </li>
            <li>
              <Link to='/blog'>
                <div className='info-content'>
                  0
                </div>
                <div className='info-content'>
                  粉丝
                </div>
              </Link>
            </li>
            <li>
              <Link to='/blog'>
                <div className='info-content'>
                  21
                </div>
                <div className='info-content'>
                  获赞
                </div>
              </Link>
            </li>
            <li>
              <Link to='/blog'>
                <div className='info-content'>
                  34
                </div>
                <div className='info-content'>
                  评论
                </div>
              </Link>
            </li>
            <li>
              <Link to='/blog'>
                <div className='info-content'>
                  5
                </div>
                <div className='info-content'>
                  收藏
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <Link to="/">
            <Button size='large'>TA的主页</Button>
          </Link>
          <Link to="/">
            <Button size='large'>私信</Button>
          </Link>
          <Button size='large'>关注</Button>
        </div>
      </div>
    )
  }
}