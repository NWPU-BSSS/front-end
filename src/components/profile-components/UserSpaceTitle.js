import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Tag } from 'antd'
import styles from './UserSpaceTitle.module.css'

export class UserSpaceTitle extends Component {

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    codeAge: PropTypes.number.isRequired,
    introduction: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.avatar}>
            <Avatar size={64} src={this.props.avatar}/>
            <Tag style={{ marginRight: 0 }} color="red">CA{this.props.codeAge}</Tag>
          </div>
          <div className={styles.info}>
            <div className={styles.nickname}>
              {this.props.nickname}
            </div>
            <div className={styles.otherInfo}>
              {this.props.className}
            </div>
            <div className={styles.otherInfo}>
              {this.props.introduction}
            </div>
          </div>
          <div className={styles.level}>
            <Tag color="red">Lv {this.props.level}</Tag>
          </div>
        </div>
      </div>

    )
  }
}