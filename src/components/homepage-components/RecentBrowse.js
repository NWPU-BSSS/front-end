import React, { Component } from 'react'
import { Card } from 'antd'
import './RecentBrowse.css'

export class RecentBrowse extends Component {

  render () {
    return (
      <div className="recent-browse">
        <div className="title">最近浏览</div>
        <Card title=".NET 5 即将发布">
          <div>微软赋予.NET极强的环境，对开发者非常友好，在未来有望超越Java</div>
        </Card>
        <Card title=".NET 5 即将上线，你还在用Java吗？">
          <div>.NET框架不仅对开发者友好，而且运行效率更高。</div>
        </Card>
      </div>
    )
  }
}