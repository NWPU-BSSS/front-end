import React, { Component } from 'react'
import { Avatar, Button } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import logo from '../../assets/img/u208.png'
import PropTypes from 'prop-types'
import './CommentList.css'

class CommentItem extends Component {

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    root: PropTypes.bool,
    username: PropTypes.string.isRequired
  }

  handleReply = () => {
    alert('回复' + this.props.username)
  }

  render () {
    let Tab = this.props.root ? '' : <div style={{ width: '40px' }}/>
    let borderTop = this.props.root ? '1px solid #e9e9e9' : 'none'
    return (
      <div className="CommentItem" style={{ borderTop }}>
        <div className="left">
          {Tab}
          <div className="item avatar">
            <Avatar size={36} src={this.props.avatar}/>
          </div>
          <div className="item username">
            <div>{this.props.username}</div>
          </div>
          :
          <div className="item comment">
            <div>{this.props.comment}</div>
          </div>
          <div className="item datetime">
            <div>{this.props.datetime}</div>
          </div>
          <div className="item reply">
            <Button type="link" onClick={this.handleReply}>回复</Button>
          </div>
        </div>
        <div className="like">
          <LikeOutlined/>
          <div>{this.props.likeCount}</div>
        </div>
      </div>
    )
  }
}

export class CommentList extends Component {

  render () {
    return (
      <div className="CommentList">
        <CommentItem root avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
        <CommentItem avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
        <CommentItem root avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
        <CommentItem avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
        <CommentItem root avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
        <CommentItem avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
        <CommentItem root avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
        <CommentItem avatar={logo} comment={'hel'} datetime={'12-12-12'} likeCount={15} username={'chyoic'}/>
      </div>
    )
  }
}