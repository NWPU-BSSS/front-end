import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { connect } from 'react-redux'
import { releaseArticleAsync } from '../@redux/actions'

class ReleaseBlogPage extends Component {

  releaseBlog = async () => {
    const { title, content } = this
    this.props.releaseArticleAsync({ title, content, userId: 1 })
  }

  handleInputTitle = e => {
    this.title = e.target.value
  }

  handleInputContent = e => {
    this.content = e.target.value
  }

  render () {
    return (
      <div style={{
        width: '100%',
        textAlign: 'center'
      }}>
        <header style={{
          margin: '75px auto',
          fontSize: '18px',
          textAlign: 'center'
        }}>发布博客
        </header>
        <Input style={{
          width: '80%',
          margin: '20px'
        }} type="text" placeholder="请输入标题" onChange={this.handleInputTitle}/>
        <textarea style={{
          margin: '0 auto',
          width: '80%',
          height: '400px',
          resize: 'none',
          border: '2px solid #e9e9e9',
          padding: '20px'
        }} onChange={this.handleInputContent} />
        <Button style={{
          width: '400px',
          margin: '35px auto',
          padding: 'auto 75px'
        }} type="primary" onClick={this.releaseBlog}>点击发布</Button>
      </div>
    )
  }
}

ReleaseBlogPage = connect(
  state => ({}),
  { releaseArticleAsync }
)(ReleaseBlogPage)

export { ReleaseBlogPage}

