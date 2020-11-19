import React, { Component } from 'react'
import { Card, List } from 'antd'
import './ClassificationColumn.css'
const data = [
  <p>java&nbsp;&nbsp;&nbsp;&nbsp;</p>,
  <p>设计模式&nbsp;&nbsp;&nbsp;&nbsp;</p>,
  <p>rubbo&nbsp;&nbsp;&nbsp;&nbsp;</p>,
]

export class ClassificationColumn extends Component {

  render () {
    let header = <div className="classification-column-header">分类专栏</div>

    return (
      <Card className="classification-column">
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