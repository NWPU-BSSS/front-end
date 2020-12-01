import React, { Component } from 'react'
import { AccountBookOutlined, FormOutlined, HeartOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import './ThumbBox.css'
import { Button } from 'antd'

export class ThumbBox extends Component {
  static propTypes = {
    likeNum: PropTypes.number,
    commentNum: PropTypes.number,
    shareNum: PropTypes.number,
    favoriteNum: PropTypes.number
  }

  render () {
    return (
      <div className="ThumbBox">
          <div className="item text">
            <LikeOutlined/><span>Like</span><span>{this.props.likeNum}</span>
          </div>
          <div className="item text">
            <FormOutlined/><span>Comment</span><span>{this.props.commentNum}</span>
          </div>
          <div className="item text">
            <ShareAltOutlined /><span>Share</span><span>{this.props.shareNum}</span>
          </div>
          <div className="item text">
            <HeartOutlined /><span>Favorite</span><span>{this.props.favoriteNum}</span>
          </div>
          {/*<div className="item text">*/}
          {/*  <AccountBookOutlined /><span>Pay</span><span>6</span>*/}
          {/*</div>*/}
          <div className="item">
            <Button danger type="primary">Subscribe</Button>
          </div>
          <div className="item">
            <Button danger type="primary">Subscribe Like and Share</Button>
          </div>
      </div>
    )
  }
}