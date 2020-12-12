import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Button, List } from 'antd'
import { connect } from 'react-redux'
import { subscribeBlogPageBloggerAsync } from '../../@redux/actions_async'

export class FanItem extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    bloggerId: PropTypes.number.isRequired,
    introduction: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    subscribeStatus: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      subscribeStatus: undefined
    }
  }

  handleSubscribe = () => {
    let { bloggerId, isSubscribed } = this.props
    let subscribe = !isSubscribed
    this.props.subscribeAsync({ bloggerId, subscribe })
    this.setState({ subscribeStatus: subscribe })
  }

  render () {
    const { nickname, avatar, isSubscribed, bloggerId, introduction } = this.props
    let status = this.state.subscribeStatus !== undefined ? this.state.subscribeStatus : isSubscribed
    return (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={avatar}/>}
          title={<a href={`/blogger/${bloggerId}/blog`}>{nickname}</a>}
          description={<span>{introduction}</span>}
        />
        <Button onClick={this.handleSubscribe} type={status ? '' : 'primary'}
                danger>{status ? 'Subscribed' : 'Subscribe'}</Button>
      </List.Item>
    )
  }
}

FanItem = connect(
  () => {},
  { subscribeAsync: subscribeBlogPageBloggerAsync }
)(FanItem)