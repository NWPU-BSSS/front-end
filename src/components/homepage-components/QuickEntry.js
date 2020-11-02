import React, { Component } from 'react'
import { List, Button, Card } from 'antd'
import './QuickEntry.css'

const data = [
  <a>我的博客</a>,
  <a>我的空间</a>,
  <a>我的好友</a>,
]

export class QuickEntry extends Component {

  render () {
    let header = <div className="quick-entry-header">快捷入口<Button type="primary">添加</Button></div>

    return (
      <Card className="quick-entry">
        <List
          size="small"
          header={header}
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
          loadMore={<div className="text-center hover-pointer">...</div>}
        />
      </Card>
    )
  }
}