import React, { Component } from 'react'
import { MdEditor } from '../components/release-blog-components/MdEditor'
import { ToolBox } from '../components/release-blog-components/ToolBox'
import { BlogInfoSetting } from '../components/release-blog-components/BlogInfoSetting'
import './Pages.css'
import { connect } from 'react-redux'

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

ReleaseBlogPage = connect(
  state => ({ isLogin: state['userState'].userId === 1 }),
)(ReleaseBlogPage)

export { ReleaseBlogPage }

