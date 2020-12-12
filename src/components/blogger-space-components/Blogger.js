import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Button, Space, Tag } from 'antd'
import styles from './Blogger.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { subscribeAsync } from '../../@redux/actions_async'

export class Blogger extends Component {

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    codeAge: PropTypes.number.isRequired,
    introduction: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    bloggerId: PropTypes.number.isRequired
  }

  handleSubscribe = () => {
    let subscribe = !this.props.subscribeStatus
    let bloggerId = this.props.bloggerId
    this.props.subscribeAsync({ bloggerId, subscribe })
  }

  render () {
    return (
      <div className={styles.container}>
        <Link to="/profile/info" className={styles.left}>
          <Space direction="vertical" align="center">
            <Avatar size={64} src={this.props.avatar}>{this.props.username}</Avatar>
            <Tag color="red" style={{ marginRight: 0 }}>CA{this.props.codeAge}</Tag>
          </Space>
        </Link>
        <div className={styles.main}>
          <div className={styles.username}>
            {this.props.nickname}
          </div>
          <div className={styles.verify}>
            <div className={styles.introduction}>
              {this.props.className}
            </div>
            <div className={styles.introduction}>
              {this.props.introduction}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Button danger>Chat</Button>
          <Button type={this.props.subscribeStatus ? '' : 'primary'} danger
                  onClick={this.props.handleSubscribe}>{this.props.subscribeStatus ? 'Subscribed' : 'Subscribe'}</Button>
        </div>
      </div>
    )
  }
}

Blogger = connect(
  state => {
    const { subscribeStatus } = state.$BLoggerPageState
    return {
      subscribeStatus: subscribeStatus
    }
  },
  { subscribeAsync }
)(Blogger)