import { Avatar } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import './ItemContent.css'

export const ItemContent = props =>
  <div className="ItemContent">
    <div>{props.content.length > 160 ? props.content.substr(0, 160) + '...' : props.content}</div>
    <div className="bottom">
      <div className="item avatar">
        <Avatar src={props.avatar}/>
      </div>
      <div className="main">
        <div className="item title">
          {props.title}
        </div>
        <div className="item date">
          {props.createTime}
        </div>
      </div>
    </div>
  </div>

ItemContent.propTypes = {
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createTime: PropTypes.string.isRequired
}