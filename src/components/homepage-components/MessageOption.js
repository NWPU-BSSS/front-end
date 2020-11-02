import React, { Component } from 'react'
import { List } from 'antd'
import './MessageOption.css'

const data = [
  <a>我的消息</a>,
  <a>公告</a>,
  <a>评论</a>,
  <a>关注</a>,
  <a>点赞</a>,
  <a>私信</a>,
  <a>回答</a>,
  <a>系统通知</a>,
  <a>消息设置</a>
];

export class MessageOption extends Component {

  render () {
    return (
      <div className="message-option">
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}