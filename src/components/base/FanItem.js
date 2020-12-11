import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Button, List } from 'antd'

export class FanItem extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    bloggerId: PropTypes.number.isRequired,
    introduction: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    subscribeStatus: PropTypes.bool.isRequired
  }

  render () {
    const { nickname, avatar, subscribeStatus, bloggerId, introduction } = this.props
    return (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={avatar}/>}
          title={<a href={`/blogger/${bloggerId}/blog`}>{nickname}</a>}
          description={<span>{introduction}</span>}
        />
        <Button type={subscribeStatus ? '' : 'primary'}
                danger>{subscribeStatus ? 'Subscribed' : 'Subscribe'}</Button>
      </List.Item>
    )
  }
}