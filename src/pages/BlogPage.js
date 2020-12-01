import React, { Component } from 'react'
import { BlogPageLeft } from '../components/blogpage-components/BlogPageLeft'
import { BlogPageMain } from '../components/blogpage-components/BlogPageMain'
import PropTypes from 'prop-types'
import { getBlogAsync } from '../@redux/actions_async'
import './BlogPage.css'
import { connect } from 'react-redux'

class BlogPage extends Component {
  static propTypes = {
    getBlogAsync: PropTypes.func,
    blogInfo: PropTypes.object
  }

  componentWillMount () {
    let blogId = this.props.match.params.blogId
    this.props.getBlogAsync(blogId)
  }

  render () {
    return (
      <div className="BlogPage">
        <BlogPageLeft/>
        <BlogPageMain {...this.props.blogInfo}/>
      </div>
    )
  }
}

BlogPage = connect(
  state => ({
    blogInfo: state.BlogList.blogInfo
  }),
  { getBlogAsync }
)(BlogPage)

export { BlogPage }

