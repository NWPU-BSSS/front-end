import React, { Component } from 'react'
import { UserOutlined, FunctionOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import avatar from '../../assets/img/logo192.png'
import './Blogger.css'

export class Blogger extends Component {

  render () {
    return (
      <div className="Blogger">
        <div className="left">
          <Avatar size={96} src={avatar}/>
          <span>
            {
              '码龄3年'
            }
          </span>
        </div>
        <div className="main">
          <div className="username">
            <UserOutlined/>
            {
              '路喵喵学长'
            }
          </div>
          <div className="userinfo">
            <div className="verify">
              <UserOutlined/>
              <span>
                {
                  '14011111班'
                }
              </span>
              学生
              <span>

              </span>
              <span>
                <Button danger>我要认证</Button>
              </span>
            </div>
            <div className="introduction">
              <FunctionOutlined/>
              {
                '刘刘杰也叫陆喵喵'
              }
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