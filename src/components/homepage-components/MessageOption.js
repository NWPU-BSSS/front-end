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

export class MessageOption extends Component {

  componentWillMount () {
    let { announcement, notice, reply, message, like, follow, comment } = {
      'announcement': 6419320728860216,
      'comment': 372706618290464,
      'follow': 1258856655655276,
      'message': 1890426755384432,
      'reply': 1912032601999116,
      'notice': 6078024778023332,
      'like': 1758107999388376
    }

    let badge = [0, announcement, comment, follow, like, message, reply, notice, 0]
    for (let i = 0; i < data.length; i++) {
      data[i].badge = badge[i]
    }
  }

  render () {
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