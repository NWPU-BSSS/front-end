import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Button, Input, Space } from 'antd'
import logo from '../../assets/img/u208.png'
import styles from './AddComment.module.css'
import { connect } from 'react-redux'

export class AddComment extends Component {
  static propTypes = {
    addComment: PropTypes.func
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
          <Avatar src={""} size={36}/>
        </div>
        <div className={styles.right}>
          <div className={styles.textarea}>
            <Input.TextArea className={styles.textarea} type="text" placeholder="Reply" value={this.state.comment}
                            onChange={this.handleInputComment}/>
          </div>
          <div className={styles.button}>
            <Button type="primary" danger onClick={this.handleClickComment}>评论</Button>
          </div>
        </div>
      </div>
    )
  }
}