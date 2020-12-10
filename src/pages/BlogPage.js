import React, { Component } from 'react'
import { BlogPageLeft } from '../components/blogpage-components/BlogPageLeft'
import { BlogPageMain } from '../components/blogpage-components/BlogPageMain'
import PropTypes from 'prop-types'
import {
  addCommentAsync,
  getBlogAsync,
  getBlogBloggerInfoAsync,
  getBloggerTagsAsync,
  getCommentsAsync, getSubscribeStatusAsync, subscribeAsync
} from '../@redux/actions_async'
import './BlogPage.css'
import { connect } from 'react-redux'
import { BloggerPanel } from '../components/blogpage-components/BloggerPanel'
import { ClassificationColumn } from '../components/blogpage-components/ClassificationColumn'
import { BlogTitle } from '../components/blogpage-components/BlogTitle'
import { BlogContent } from '../components/blogpage-components/BlogContent'
import { ThumbBox } from '../components/blogpage-components/ThumbBox'
import { AddComment } from '../components/blogpage-components/AddComment'
import { CommentList } from '../components/blogpage-components/CommentList'

class BlogPage extends Component {
  static propTypes = {
    getBlogAsync: PropTypes.func,
    blogInfo: PropTypes.object,
    commentList: PropTypes.array,
    tagList: PropTypes.array,
    bloggerInfo: PropTypes.object
  }

  componentWillMount () {
    let blogId = this.props.match.params.blogId
    //TODO: 在后端完成 /blog 接口后，删除 默认bloggerId
    let bloggerId = this.props.blogInfo.bloggerId || 3
    this.props.getBlogAsync(blogId)
    this.props.getCommentsAsync(blogId)
    this.props.getBlogBloggerInfoAsync(bloggerId)
    this.props.getBloggerTagsAsync(bloggerId)
    this.props.getSubscribeStatusAsync(bloggerId)
  }

  handleAddComment = content => {
    let blogId = this.props.match.params.blogId
    this.props.addCommentAsync({ blogId, content })
  }

  handleSubscribe = () => {
    //TODO: 删除默认 bloggerId
    let { bloggerId = 3 } = this.props.blogInfo
    let status = this.props.subscribeStatus
    this.props.subscribeAsync({ bloggerId, subscribe: !status })
  }

  handleLike = () => {
    alert('like')
  }

  handleFavorite = () => {
    alert('fav')
  }

  render () {
    let { title, content, likeNum, commentNum, favoriteNum, shareNum } = this.props.blogInfo

    return (
      <div className="BlogPage">
        <BlogPageLeft>
          <BloggerPanel {...this.props.bloggerInfo} isSubscribed={this.props.subscribeStatus}
                        handleSubscribe={this.handleSubscribe}/>
          <ClassificationColumn tagsList={this.props.tagList}/>
          {/*<BlogCategory/>*/}
        </BlogPageLeft>
        <BlogPageMain>
          <BlogTitle title={title}/>
          <BlogContent content={content || ''}/>
          <ThumbBox handleLike={this.handleLike}
                    handleFavorite={this.handleFavorite}
                    handleSubscribe={this.handleSubscribe}
                    commentNum={commentNum}
                    favoriteNum={favoriteNum}
                    likeNum={likeNum}
                    shareNum={shareNum}
          />
          <AddComment addComment={this.handleAddComment}/>
          <CommentList commentList={this.props.commentList}/>
          {/*<RelatedBlogList/>*/}
        </BlogPageMain>
      </div>
    )
  }
}

BlogPage = connect(
  state => {
    let { title, content, likeNum, commentNum, favoriteNum, comments: commentList, tags: tagList, bloggerInfo, subscribeStatus } = state.$BlogPageState
    return ({
      blogInfo: { title, content, likeNum, commentNum, favoriteNum },
      commentList,
      tagList,
      bloggerInfo,
      subscribeStatus
    })
  },
  {
    getBlogAsync,
    getCommentsAsync,
    addCommentAsync,
    getBlogBloggerInfoAsync,
    getBloggerTagsAsync,
    subscribeAsync,
    getSubscribeStatusAsync
  }
)(BlogPage)

export { BlogPage }

