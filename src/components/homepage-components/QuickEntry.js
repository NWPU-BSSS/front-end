import React, { Component } from 'react'
import { List, Button, Card } from 'antd'
import './QuickEntry.css'

const data = [
  <a>My blog</a>,
  <a>My Space</a>,
  <a>My Friends</a>,
]

export class QuickEntry extends Component {

  render () {
    let header = <div className="quick-entry-header">Quick Entry<Button type="primary">Add</Button></div>

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