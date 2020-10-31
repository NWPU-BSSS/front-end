import React, { Component } from 'react'
import { Input } from 'antd'

export class Home extends Component {

  render () {
    return (
      <div>
        <h1>Hello BSSS</h1>
        <Input.Search style={{
          width: 200,
          margin: '0 20px',
        }} placeholder="搜索" size="large"/>
      </div>
    )
  }
}