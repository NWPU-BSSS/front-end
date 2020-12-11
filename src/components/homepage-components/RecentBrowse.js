import React, { Component } from 'react'
import { Card } from 'antd'
import './RecentBrowse.css'

export class RecentBrowse extends Component {

  render () {
    return (
      <div className="recent-browse">
        <div className="title">Recent Browse</div>
        <Card title=".NET 5">
          <div>ASP .NET Core</div>
        </Card>
        <Card title=".NET 5">
          <div>ASP .NET Core</div>
        </Card>
      </div>
    )
  }
}