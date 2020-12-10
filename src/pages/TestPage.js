import React, { Component } from 'react'
import { login } from '../@api'
import { BlogTable } from '../components/manager-blogs-components/BlogTable'

export class TestPage extends Component {

  handleClick = async () => {
    await login({ email: '925993394@qq.com', password: '0' })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
        <BlogTable />
      </div>
    )
  }
}