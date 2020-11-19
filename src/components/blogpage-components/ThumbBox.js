import React, { Component } from 'react'
import thumbLogo from '../../assets/img/点赞.svg'
import commentLogo from '../../assets/img/评论_u812.svg'
import shareLogo from '../../assets/img/分享_u714.svg'
import collectLogo from '../../assets/img/收藏_u813.svg'
import rewardLogo from '../../assets/img/打赏_u814.svg'
import  './ThumbBox.css'
import {button} from 'antd'
export class ThumbBox extends Component {
  render () {
    return (
      <div className="BlogPage" style={{
      }}>

        <div className="thumb-box">
          <div>
            <img width='30px' src={thumbLogo}/><span>点赞</span><span>6</span>
          </div>
          <div>
            <img src={commentLogo}/><span>评论</span><span>6</span>
          </div>
          <div>
            <img id="share" src={shareLogo}/><span>分享</span><span>6</span>
          </div>
          <div>
            <img id="collect" src={collectLogo}/><span>收藏</span><span>6</span>
          </div>
          <div>
            <img src={rewardLogo}/><span>打赏</span><span>6</span>
          </div>
            <button style={{}}>关注</button>
            <button>一键三连</button>


        </div>
      </div>
    )
  }
}