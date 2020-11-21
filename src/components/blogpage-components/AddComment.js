import React, { Component } from 'react'
import { Avatar, Button, Input, Space } from 'antd'
import logo from '../../assets/img/u208.png'
import './AddComment.css'

export class AddComment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment : ''
    }
  }

  handleInputComment = e => {
    this.setState({ comment: e.target.value})
  }

  handleClickComment = () => {
    alert('发送评论')
  }

  render () {
    return (
      <div className="AddComment">
          <div className="box">
            <Avatar src={logo} size={36}/>
          </div>
          <div className="box comment-input">
            <Input type="text" placeholder="评论" value={this.state.comment} onChange={this.handleInputComment}/>
          </div>
          <div className="box">
            <Button type="primary" danger onClick={this.handleClickComment}>评论</Button>
          </div>
      </div>
    )
  }
}