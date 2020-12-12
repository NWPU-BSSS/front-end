import React, { Component } from 'react'
import { MdEditor } from '../components/release-blog-components/MdEditor'
import { ToolBox } from '../components/release-blog-components/ToolBox'
import { BlogInfoSetting } from '../components/release-blog-components/BlogInfoSetting'
import './Pages.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Layout } from '../components/Layout'

class ReleaseBlogPage extends Component {
  render () {
    if (!this.props.isLogin) {
      return <Redirect to="/login"/>
    }

    return (
      <Layout>
        <BlogInfoSetting/>
        <ToolBox/>
        <MdEditor/>
      </Layout>
    )
  }
}

ReleaseBlogPage = connect(
  state => ({ isLogin: state.$UserState.userId !== -1 }),
)(ReleaseBlogPage)

export { ReleaseBlogPage }

