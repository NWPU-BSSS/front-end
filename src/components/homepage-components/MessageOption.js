import React, { Component } from 'react'
import { Badge, List } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './MessageOption.css'

const Option = props => {
  let Child = props.badge > 0 ? <Badge count={props.badge}/> : ''
  return (
    <List.Item>
      <Link to={props.url}>{props.title}</Link>
      {Child}
    </List.Item>
  )
}

Option.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  badge: PropTypes.number.isRequired
}

const data = [
  { title: 'My Message', url: '/', badge: 0 },
  { title: 'Announcements', url: '/', badge: 0 },
  { title: 'Comments', url: '/', badge: 0 },
  { title: 'Subscribes', url: '/', badge: 0 },
  { title: 'Likes', url: '/', badge: 0 },
  { title: 'Chats', url: '/', badge: 0 },
  { title: 'Answers', url: '/', badge: 0 },
  { title: 'Notices', url: '/', badge: 0 },
  { title: 'Settings', url: '/', badge: 0 }
]

export class MessageOption extends Component {

  static propTypes = {
    announcement: PropTypes.number,
    comment: PropTypes.number,
    follow: PropTypes.number,
    like: PropTypes.number,
    message: PropTypes.number,
    notice: PropTypes.number,
    reply: PropTypes.number
  }

  render () {
    let { announcement, notice, reply, message, like, follow, comment } = this.props
    let badge = [0, announcement, comment, follow, like, message, reply, notice, 0]
    for (let i = 0; i < data.length; i++) {
      data[i].badge = badge[i]
    }

    return (
      <div className="message-option">
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={({ title, badge, url }) => (
            <Option title={title} badge={badge} url={url}/>
          )}
        />
      </div>
    )
  }
}