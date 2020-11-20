import React, { Component } from 'react'
import { MdEditor } from '../components/release-blog-components/MdEditor'
import { ToolBox } from '../components/release-blog-components/ToolBox'
import { BlogInfoSetting } from '../components/release-blog-components/BlogInfoSetting'
import './Pages.css'

class ReleaseBlogPage extends Component {
  render () {
    return (
      <div>
        <BlogInfoSetting/>
        <ToolBox/>
        <MdEditor/>
      </div>
    )
  }
}

// ReleaseBlogPage = connect(
//   state => ({}),
// )(ReleaseBlogPage)

export { ReleaseBlogPage }

