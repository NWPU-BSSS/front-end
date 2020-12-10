import React, { Component } from 'react'
import { Avatar } from 'antd'
import avatar from '../../assets/temporary/u508.png'
import './MyFans.css'
class FansItem extends Component {
  render () {
    return (
      <div className="fans">
        <Avatar className="fansAvatar" src={avatar}/>
        <text className="fansName">{this.props.fansName}</text>
        <button className="fansSubscribeButton">{this.props.fansSubscribeButton}</button>
      </div>
    )
  }
}

export class MyFans extends Component {

  render () {
    return (
      <div className="fansList">
        <div className="fansListNavagator">我的关注</div>
        <FansItem fansName={"鹿喵喵"} fansSubscribeButton={"Cancel the Subscribe"}/>
        <FansItem fansName={"鲈淼淼"} fansSubscribeButton={"Subscribe the Blogger"}/>
        <FansItem fansName={"鹭鹋鹋"} fansSubscribeButton={"Cancel the Subscribe"}/>
      </div>
    )
  }
}