import React, { Component } from 'react'
import { BlogContent } from './BlogContent'
import './BlogPageMain.css'
import { ThumbBox } from './ThumbBox'
import { RelatedBlogList } from './RelatedBlogList'
import { AddComment } from './AddComment'
import { CommentList } from './CommentList'
import PropTypes from 'prop-types'

export class BlogPageMain extends Component {

  static propTypes = {
    blogInfo: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="BlogPageMain">
        <BlogContent content={this.props.blogInfo.content || ''}/>
        <ThumbBox/>
        <AddComment/>
        <CommentList/>
        <RelatedBlogList/>
      </div>
    )
  }
}