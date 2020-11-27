import React, { Component } from 'react'
import { AccountBookOutlined, FormOutlined, HeartOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'

import './ThumbBox.css'

export class ThumbBox extends Component {
  render () {
    return (
      <div className="ThumbBox">
          <div className="item">
            <LikeOutlined/><span>点赞</span><span>6</span>
          </div>
          <div className="item">
            <FormOutlined/><span>6</span>
          </div>
          <div className="item">
            <ShareAltOutlined /><span>分享</span><span>6</span>
          </div>
          <div className="item">
            <HeartOutlined /><span>收藏</span><span>6</span>
          </div>
          <div className="item">
            <AccountBookOutlined /><span>打赏</span><span>6</span>
          </div>
          <div className="item">
            <button>关注</button>
          </div>
          <div className="item">
            <button>一键三连</button>
          </div>
      </div>
    )
  }
}