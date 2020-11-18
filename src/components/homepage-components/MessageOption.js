import React, { Component } from 'react'
import { Badge, List } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './MessageOption.css'

const data = [
  { title: '我的消息', url: '/', badge: 0 },
  { title: '公告', url: '/', badge: 0 },
  { title: '评论', url: '/', badge: 0 },
  { title: '关注', url: '/', badge: 0 },
  { title: '点赞', url: '/', badge: 0 },
  { title: '私信', url: '/', badge: 0 },
  { title: '回答', url: '/', badge: 0 },
  { title: '系统通知', url: '/', badge: 0 },
  { title: '消息设置', url: '/', badge: 0 }
]

function MessageItem (props) {
  let Child = ''
  if (props.badge > 0) {
    Child = <Badge count={props.badge} />
  }

  return (
    <List.Item>
      <Link to={props.url}>{props.title}</Link>
      {Child}
    </List.Item>
  )
}

// MessageItem.propTypes = {
//   badge: PropTypes.number,
//   url: PropTypes.string,
//   title: PropTypes.string
// }

export class MessageOption extends Component {
  componentWillMount () {
    let { announcement, comment, follow, like, message, notice, reply } = {
      'announcement': 1,
      'comment': 2,
      'follow': 3,
      'message': 4,
      'reply': 5,
      'notice': 7,
      'like': 8
    }

    let badges = [0, announcement, comment, follow, like, message, reply, notice, 0]

    for (let i = 0; i < data.length; i++) {
      data[i].badge = badges[i]
    }

    console.log(data)
  }

  render () {
    return (
      <div className="message-option">
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={({ title, badge, url }) => (
              <MessageItem title={title} badge={badge} url={url}/>
          )}
        />
      </div>
    )
  }
}