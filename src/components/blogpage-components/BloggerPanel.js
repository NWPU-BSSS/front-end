import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Avatar, Button, Tag } from 'antd'
import styles from './BloggerPanel.module.css'
import { Link } from 'react-router-dom'
import { LeftCard } from './common/LeftCard'

class BloggerPanelInfoItem extends Component {

  static propTypes = {
    action: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }

  render () {
    return (
      <li>
        <Link to={this.props.action}>
          <div className={styles.infoItem}>
            <div className='info-content'>{this.props.num}</div>
            <div className='info-content'>{this.props.text}</div>
          </div>
        </Link>
      </li>
    )
  }

}

export class BloggerPanel extends Component {

  static defaultProps = {
    blogNum: 0,
    className: '1444444',
    codeAge: 0,
    commentNum: 0,
    fanNum: 0,
    favoriteNum: 0,
    level: 0,
    likeNum: 0
  }

  static propTypes = {
    avatar: PropTypes.string,
    blogNum: PropTypes.number,
    bloggerId: PropTypes.number,
    className: PropTypes.string.isRequired,
    codeAge: PropTypes.number,
    commentNum: PropTypes.number,
    fanNum: PropTypes.number,
    favoriteNum: PropTypes.number,
    handleSubscribe: PropTypes.func.isRequired,
    isSubscribed: PropTypes.bool.isRequired,
    level: PropTypes.number,
    likeNum: PropTypes.number,
    nickname: PropTypes.string.isRequired
  }

  render () {
    return (
      <LeftCard
        header="Blogger"
        body={
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.topLeft}>
                <Avatar size={64} src={this.props.avatar}>{this.props.nickname}</Avatar>
                <Tag color="magenta">Lv{this.props.level}</Tag>
              </div>
              <div className={styles.topRight}>
                <div className={styles.nickname}>{this.props.nickname}</div>
                <div className={styles.otherInfo}>
                  <Tag color="red">CA{this.props.codeAge}</Tag>
                  <div>{this.props.className}</div>
                </div>
              </div>
            </div>
            <div className={styles.middle}>
              <ul>
                <BloggerPanelInfoItem text="Blog" action={`/blogger/${this.props.bloggerId}/blog`}
                                      num={this.props.blogNum}/>
                <BloggerPanelInfoItem text="Fan" action={`/blogger/${this.props.bloggerId}/fans`}
                                      num={this.props.fanNum}/>
                <BloggerPanelInfoItem text="Like" action={`/blogger/${this.props.bloggerId}/blog`}
                                      num={this.props.likeNum}/>
                <BloggerPanelInfoItem text="Comment" action={`/blogger/${this.props.bloggerId}/blog`}
                                      num={this.props.commentNum}/>
                <BloggerPanelInfoItem text="Fav" action={`/blogger/${this.props.bloggerId}/fav`}
                                      num={this.props.favoriteNum}/>
              </ul>
            </div>
            <div className={styles.bottom}>
              <Link className="link" to={`/blogger/${this.props.bloggerId}`}>
                <Button size='large'>Profile</Button>
              </Link>
              <Link className="link" to="/">
                <Button size='large'>Chat</Button>
              </Link>
              <Button danger size='large'
                      type={this.props.isSubscribed ? "default": "primary"}
                      onClick={this.props.handleSubscribe}>{this.props.isSubscribed ? 'Subscribed' : 'Subscribe'}</Button>
            </div>
          </div>
        }
      />
    )
  }
}