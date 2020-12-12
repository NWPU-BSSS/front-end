import React, { Component } from 'react'
import { BlogPageLeft } from '../components/blogpage-components/BlogPageLeft'
import { BlogPageMain } from '../components/blogpage-components/BlogPageMain'
import PropTypes from 'prop-types'
import {
  addCommentAsync,
  getBlogAsync,
  getBlogBloggerInfoAsync, getBlogFavStatusAsync,
  getBloggerTagsAsync, getBlogLikeStatusAsync,
  getCommentsAsync,
  getBlogPageSubscribeStatusAsync, setBlogFavStatusAsync, setBlogLikeStatusAsync,
  subscribeBlogPageBloggerAsync
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
import { Layout } from '../components/Layout'
import { DEFAULT_AJAX_INTERVAL } from '../global'

class BlogPage extends Component {
  static propTypes = {
    addCommentAsync: PropTypes.func,
    blogInfo: PropTypes.object,
    bloggerInfo: PropTypes.object,
    commentList: PropTypes.array,
    favStatus: PropTypes.bool,
    getBlogAsync: PropTypes.func,
    getBlogBloggerInfoAsync: PropTypes.func,
    getBlogLikeStatusAsync: PropTypes.func,
    getBloggerTagsAsync: PropTypes.func,
    getCommentsAsync: PropTypes.func,
    getSubscribeStatusAsync: PropTypes.func,
    likeStatus: PropTypes.bool,
    match: PropTypes.string,
    setBlogLikeStatusAsync: PropTypes.func,
    subscribeAsync: PropTypes.func,
    subscribeStatus: PropTypes.bool,
    tagList: PropTypes.array
  }

  componentWillMount () {
    let blogId = this.props.match.params.blogId
    this.props.getBlogAsync(blogId)
    let timer = setInterval(() => {
      let bloggerId = this.props.blogInfo.bloggerId
      if (bloggerId) {
        this.props.getCommentsAsync(blogId)
        this.props.getBlogBloggerInfoAsync(bloggerId)
        this.props.getBloggerTagsAsync(bloggerId)
        this.props.getSubscribeStatusAsync(bloggerId)
        this.props.getBlogLikeStatusAsync(blogId)
        this.props.getBlogFavStatusAsync(blogId)
        clearInterval(timer)
      }
    }, DEFAULT_AJAX_INTERVAL)
  }

  handleAddComment = content => {
    let blogId = this.props.match.params.blogId
    this.props.addCommentAsync({ blogId, content })
  }

  handleSubscribe = () => {
    let { bloggerId } = this.props.blogInfo
    let status = this.props.subscribeStatus
    this.props.subscribeAsync({ bloggerId, subscribe: !status })
  }

  handleLike = () => {
    let blogId = this.props.match.params.blogId
    this.props.setBlogLikeStatusAsync({ blogId, like: !this.props.likeStatus })
  }

  handleFavorite = () => {
    let blogId = this.props.match.params.blogId
    this.props.setBlogFavStatusAsync({ blogId, favorite: !this.props.favStatus })
  }

  render () {
    let { title, content, likeNum, commentNum, favoriteNum, shareNum } = this.props.blogInfo
    let { likeStatus, favStatus, subscribeStatus } = this.props

    return (
      <Layout>
        <div className="BlogPage">
          <BlogPageLeft>
            <BloggerPanel {...this.props.blogInfo} isSubscribed={this.props.subscribeStatus}
                          handleSubscribe={this.handleSubscribe}
                          bloggerId={this.props.blogInfo ? this.props.blogInfo.bloggerId : -1}/>
            <ClassificationColumn tagsList={this.props.tagList}/>
          </BlogPageLeft>
          <BlogPageMain>
            <BlogTitle title={title}/>
            <BlogContent content={content || ''}/>
            <ThumbBox handleLike={this.handleLike}
                      handleFavorite={this.handleFavorite}
              // handleSubscribe={this.handleSubscribe}
                      commentNum={commentNum}
                      favoriteNum={favoriteNum}
                      likeNum={likeNum}
                      shareNum={shareNum}
                      favStatus={favStatus}
                      subscribeStatus={subscribeStatus}
                      likeStatus={likeStatus}
            />
            <AddComment addComment={this.handleAddComment}
                        avatar={this.props.bloggerInfo ? this.props.bloggerInfo.avatar : ''}
                        nickname={this.props.bloggerInfo ? this.props.bloggerInfo.nickname : ''}/>
            <CommentList commentList={this.props.commentList}/>
            {/*<RelatedBlogList/>*/}
          </BlogPageMain>
        </div>
      </Layout>
    )
  }
}

BlogPage = connect(
  ({
    $BlogPageState: {
      bloggerInfo,
      commentNum,
      bloggerId,
      comments: commentList,
      content,
      favoriteNum,
      likeNum,
      subscribeStatus,
      tags: tagList,
      title,
      likeStatus,
      favStatus,
    }
  }) =>
    ({
      blogInfo: {
        title,
        content,
        likeNum,
        commentNum,
        favoriteNum,
        bloggerId,
      },
      commentList,
      tagList,
      bloggerInfo,
      subscribeStatus,
      likeStatus,
      favStatus,
    }),
  {
    getBlogAsync,
    getCommentsAsync,
    addCommentAsync,
    getBlogBloggerInfoAsync,
    getBloggerTagsAsync,
    subscribeAsync: subscribeBlogPageBloggerAsync,
    getSubscribeStatusAsync: getBlogPageSubscribeStatusAsync,
    getBlogLikeStatusAsync,
    setBlogLikeStatusAsync,
    setBlogFavStatusAsync,
    getBlogFavStatusAsync
  }
)(BlogPage)

export { BlogPage }

