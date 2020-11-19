import React, { Component } from 'react'
import { BlogPageLeft } from '../components/blogpage-components/BlogPageLeft'
import { BlogPageMain } from '../components/blogpage-components/BlogPageMain'
import './BlogPage.css'
import logo1 from '../assets/img/u673.svg'
import logo2 from '../assets/img/u669.svg'
import logo3 from '../assets/img/u677.svg'
import logo4 from '../assets/img/u682.svg'
import thumbLogo from '../assets/img/点赞.svg'
import commentLogo from '../assets/img/评论_u812.svg'
import shareLogo from '../assets/img/分享_u714.svg'
import collectLogo from '../assets/img/收藏_u813.svg'
import rewardLogo from '../assets/img/打赏_u814.svg'
import { connect } from 'react-redux'
class BlogPageL extends Component {
  render () {
    return (
      <div className="BlogPage">
        <div style={{
          'border-width': '0px',
          'width': '319px',
          'height': '50px',
          'background-color': 'rgba(195, 228, 244, 1)',
          'border-radius': '2px',
          '-moz-box-shadow': 'none',
          '-webkit-box-shadow': 'none',
          'box-shadow': 'none',
          'font-family': '微软雅黑 Bold',
          'font-weight': 700,
          'font-style': 'normal',
          'font-size': '20px',
          'color': '#000000',
          'text-align': 'left'
        }}>
          <div style={{
            'background-color': 'rgba(195, 228, 244, 1)',
          }} className="hover-class">
            <p>&nbsp;&nbsp;&nbsp;分类专栏</p>
          </div>
          <div className="Hover">
            <div style={{

            }}>
              <img src={logo1}/>
              <span className="class-name">&nbsp;&nbsp;&nbsp;&nbsp;java</span>
              <span style={{
                textAlign: 'right',
                'float': 'right'
              }} className="quantity-class-name">6篇</span>
            </div>
            <div style={{

            }}>
              <img src={logo2}/>
              <span className="class-name">&nbsp;&nbsp;&nbsp;&nbsp;设计模式</span>
              <span style={{
                textAlign: 'right',
                'float': 'right'
              }} className="quantity-class-name">2篇</span>
            </div>
            <div style={{

            }}>
              <img src={logo3}/>
              <span className="class-name">&nbsp;&nbsp;&nbsp;&nbsp;dubbo</span>
              <span style={{
                textAlign: 'right',
                'float': 'right'
              }} className="quantity-class-name">4篇</span>
            </div>
            <div style={{

            }}>
              <img src={logo4}/>
              <span className="class-name">&nbsp;&nbsp;&nbsp;&nbsp;rocke</span>
              <span style={{
                textAlign: 'right',
                'float': 'right'
              }} className="quantity-class-name">3篇</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class BlogPageR extends Component {
  render () {
    return (
      <div className="BlogPage">
        <div className="thumb-box">
          <div>
            <img width='30px' src={thumbLogo}/><span>点赞</span><span>6</span>
          </div>
          <div>
            <img  src={commentLogo}/><span>评论</span><span>6</span>
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
          <div style={{
          }} className="attention">

              <span style={{}}>关注</span>


          </div>
          <div className="attention">

              <span>一键三连</span>


          </div>

        </div>
      </div>
    )
  }
}
class BlogPage extends Component {
  render () {
    return (
      <div className="BlogPage">
        <BlogPageL/>
        <BlogPageR/>
        <BlogPageMain/>
      </div>
    )
  }
}

// BlogPage = connect(
// state => ({...state.article.articleInfo})
// )(BlogPage)

export { BlogPage }

