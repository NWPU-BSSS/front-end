import React, { Component } from 'react'
import { BlogContent } from './BlogContent'
import './BlogPageMain.css'
import { ThumbBox } from './ThumbBox'
import { RelatedBlogList } from './RelatedBlogList'
import { AddComment } from './AddComment'
import { CommentList } from './CommentList'
import PropTypes from 'prop-types'
import { BlogTitle } from './BlogTitle'

export class BlogPageMain extends Component {

  static propTypes = {
    commentNum: PropTypes.number,
    content: PropTypes.string,
    favoriteNum: PropTypes.number,
    likeNum: PropTypes.number,
    shareNum: PropTypes.number,
    title: PropTypes.string
  }

  render () {
    return (
      <div className="BlogPageMain">
        <BlogTitle title={this.props.title}/>
        <BlogContent content={this.props.content || ''}/>
        <ThumbBox commentNum={this.props.commentNum} favoriteNum={this.props.favoriteNum} likeNum={this.props.likeNum} shareNum={this.props.shareNum}/>
        <AddComment/>
        <CommentList/>
        <RelatedBlogList/>
      </div>
    )
  }
}