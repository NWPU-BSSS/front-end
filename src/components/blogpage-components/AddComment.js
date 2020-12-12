import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Button, Input } from 'antd'
import styles from './AddComment.module.css'

export class AddComment extends Component {
  static propTypes = {
    addComment: PropTypes.func,
    avatar: PropTypes.string,
    nickname: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  handleInputComment = e => {
    this.setState({ comment: e.target.value })
  }

  handleClickComment = () => {
    this.props.addComment(this.state.comment)
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <Avatar src={this.props.avatar} size={36}>
            {this.props.nickname}
          </Avatar>
        </div>
        <div className={styles.right}>
          <div className={styles.textarea}>
            <Input.TextArea className={styles.textarea} type="text" placeholder="Content" value={this.state.comment}
                            onChange={this.handleInputComment}/>
          </div>
          <div className={styles.button}>
            <Button type="primary" danger onClick={this.handleClickComment}>Send Comment</Button>
          </div>
        </div>
      </div>
    )
  }
}