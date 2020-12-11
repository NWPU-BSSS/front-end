import React, { Component } from 'react'
import { FormOutlined, HeartFilled, HeartOutlined, LikeFilled, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import './ThumbBox.css'
import { Button } from 'antd'

export class ThumbBox extends Component {
  static propTypes = {
    commentNum: PropTypes.number.isRequired,
    favoriteNum: PropTypes.number.isRequired,
    handleFavorite: PropTypes.func.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleSubscribe: PropTypes.func.isRequired,
    likeNum: PropTypes.number.isRequired,
    shareNum: PropTypes.number.isRequired,
    likeStatus: PropTypes.bool.isRequired,
    subscribeStatus: PropTypes.bool.isRequired,
    favStatus: PropTypes.bool.isRequired,
  }

  handleSLS = ()=> {
    this.props.handleLike()
    this.props.handleFavorite()
    this.props.handleSubscribe()
  }

  render () {
    return (
      <div className="ThumbBox">
          <div className="item text" onClick={this.props.handleLike}>
            {this.props.likeStatus ? <LikeFilled />: <LikeOutlined/>}
            <span>Like</span>
            <span>{this.props.likeNum}</span>
          </div>
          <div className="item text">
            <FormOutlined/>
            <span>Comment</span>
            <span>{this.props.commentNum}</span>
          </div>
          <div className="item text" onClick={this.props.handleFavorite}>
            {this.props.favStatus ? <HeartFilled/> : <HeartOutlined/>}
            <span>Favorite</span>
            <span>{this.props.favoriteNum}</span>
          </div>
          {/*<div className="item" onClick={this.props.handleSubscribe}>*/}
          {/*  <Button danger*/}
          {/*          type={this.props.subscribeStatus ? "default": "primary"}*/}
          {/*          onClick={this.props.handleSubscribe}>{this.props.subscribeStatus ? 'Subscribed' : 'Subscribe'}</Button>*/}
          {/*</div>*/}
          {/*<div className="item" onClick={this.handleSLS}>*/}
          {/*  <Button danger type="primary">Subscribe + Like + Favorite</Button>*/}
          {/*</div>*/}
      </div>
    )
  }
}