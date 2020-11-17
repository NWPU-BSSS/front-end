import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { connect } from 'react-redux'
import { releaseBlogAsync } from '../@redux/actions'

class ReleaseBlogPage extends Component {

  releaseBlog = async () => {
    const { title, content } = this
    // this.props.releaseArticleAsync({ title, content, userId: 1 })
  }

  handleInputTitle = e => {
    this.title = e.target.value
  }

  handleInputContent = e => {
    this.content = e.target.value
  }

  render () {
    return (
      <div>
        博客发布界面
      </div>
    )
  }
}

ReleaseBlogPage = connect(
  state => ({}),
  { releaseArticleAsync: releaseBlogAsync }
)(ReleaseBlogPage)

export { ReleaseBlogPage}

