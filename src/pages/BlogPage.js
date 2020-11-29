import React, { Component } from 'react'
import { BlogPageLeft } from '../components/blogpage-components/BlogPageLeft'
import { BlogPageMain } from '../components/blogpage-components/BlogPageMain'
import connect from 'react-redux/lib/connect/connect'
import PropTypes from 'prop-types'
import { getBlogAsync } from '../@redux/actions_async'
import './BlogPage.css'

class BlogPage extends Component {
  static propTypes = {
    getBlogAsync: PropTypes.func,
    blogInfo: PropTypes.object
  }

  componentWillMount () {
    // this.props.getBlogAsync()
  }

  render () {
    return (
      <div className="BlogPage">
        <BlogPageLeft/>
        <BlogPageMain blogInfo={this.props.blogInfo || {}}/>
      </div>
    )
  }
}


export { BlogPage }

