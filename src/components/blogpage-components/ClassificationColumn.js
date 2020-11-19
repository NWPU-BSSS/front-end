import React, { Component } from 'react'
import { Card, List } from 'antd'
import './ClassificationColumn.css'
import { LeftCard } from './common/LeftCard'

const data = [
  'Java',
  'C#',
  'ASP.NET Core',
]

export class ClassificationColumn extends Component {

  render () {

    return (
      <LeftCard
        header="分类专栏"
        body={
          <div className="ClassificationColumn">
            <List
              dataSource={data}
              renderItem={item =>
                <List.Item className="list-item">
                  <div>{item}</div>
                  <div>5篇</div>
                </List.Item>}
              loadMore={<div className="text-center hover-pointer">...</div>}
            />
          </div>
        }
      />
    )
  }
}