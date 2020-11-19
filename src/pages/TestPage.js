import React, { Component } from 'react'
import { login } from '../@api'

export class TestPage extends Component {

  handleClick = async () => {
    await login({ email: '925993394@qq.com', password: '0' })
  }

  render () {
    return (
      <div>
        <a href="/t#123">点击锚点</a>
        <button onClick={this.handleClick}>点击</button>
        <h1 id="123" style={{
          marginTop: '1500px'
        }}>这是锚点</h1>
      </div>
    )
  }
}