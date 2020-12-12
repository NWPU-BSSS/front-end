import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { List, Avatar, Button, Comment } from 'antd'
import './CommentList.css'
import { Link } from 'react-router-dom'

class CommentItem extends Component {

  static propTypes = {
    author: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    content: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired
  }

  render () {
    const { authorId, avatar, author, content, datetime } = this.props
    return (
      <Comment
        // actions={<Button danger>Reply</Button>}
        author={<Link to={`/blogger/${authorId}`}>{author}</Link>}
        avatar={
          <Avatar
            src={avatar}
            alt={authorId}
          />
        }
        content={<p>{content}</p>}
        datetime={datetime}
      >
        {this.props.children}
      </Comment>
    )
  }

}

export class CommentList extends Component {

  static propTypes = {
    commentList: PropTypes.array.isRequired
  }

  render () {
    let comments = this.props.commentList
    return (
      <div className="CommentList">
        <List
          header={`${comments.length} replies`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={item => {
            let { nickname, userId, avatar, time, content} = item
            return (
              <li>
                <CommentItem author={nickname} authorId={userId} avatar={<Avatar src={avatar} alt="avatar">{nickname}</Avatar>} content={content} datetime={time}/>
              </li>
            )
          }}
        />
      </div>
    )
  }
}