import { Avatar } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import './ItemContent.css'
import { Link } from 'react-router-dom'

export const ItemContent = props =>
  <div className="ItemContent">
    <Link className="preview" to={'/blog?blogId=' + props.blogId}>{props.preview}</Link>
    <div className='bottom'>
      <Link to={'/user?userId=' + props.userId} className='item avatar'>
        <Avatar src={props.avatar}/>
      </Link>
      <div className="main">
        <Link to={'/user?userId=' + props.userId} className="item title">
          {props.nickname}
        </Link>
        <div className="item date">
          {props.lastModifiedTime}
        </div>
      </div>
    </div>
  </div>

ItemContent.propTypes = {
  preview: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  lastModifiedTime: PropTypes.string.isRequired,
  blogId: PropTypes.number.isRequired
}