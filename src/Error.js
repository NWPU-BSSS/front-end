import React, { Component } from 'react'
import Button, { Result } from 'antd'

export default class Error extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      )
    }

    return this.props.children
  }
}