import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { connect } from 'react-redux'
import { releaseBlogAsync } from '../@redux/actions'
import { BlogEditor } from '../components/release-blog-components/BlogEditor'

class ReleaseBlogPage extends Component {
  render () {
    return (
      <div>
        <BlogEditor/>
      </div>
    )
  }
}

// ReleaseBlogPage = connect(
//   state => ({}),
// )(ReleaseBlogPage)

export { ReleaseBlogPage }

