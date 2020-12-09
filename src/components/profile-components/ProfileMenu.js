import React, { Component } from 'react'
import './PersonalInfoMenu.css'
import PropTypes from 'prop-types'

function MenuItem (props) {
  return (
    <div className="personal-info-menu-item">
      <a href={props.action}>{props.title}</a>
    </div>
  )
}

const languageHere = {
  PersonalInfo: '个人资料',
  AccountSecurity: '账号安全',
  Collection: '我的收藏',
  Follower: '我的关注',
  Fans: '我的粉丝',
  MyBlog: '我的博客',
  MyDownload: '我的下载',
  MyAnswer: '我的回答',
  MyCollege: '我的学院',
}

export class ProfileMenu extends Component {


  render () {
    const { PersonalInfo, AccountSecurity, Collection, Follower, Fans, MyBlog, MyDownload, MyAnswer, MyCollege} = languageHere;

    return (
      <div className="personal-info-menu">
        <MenuItem title={PersonalInfo} action="/profile/info"/>
        {/*<MenuItem title={AccountSecurity} action="/profile/safe"/>*/}
        <MenuItem title={Collection} action="/profile/fav"/>
        <MenuItem title={Follower} action="/profile/subscribe"/>
        <MenuItem title={Fans} action="/profile/fans"/>
        <MenuItem title={MyBlog} action="/profile/blogs"/>
        {/*<MenuItem title={MyDownload}/>*/}
        {/*<MenuItem title={MyAnswer}/>*/}
        {/*<MenuItem title={MyCollege}/>*/}
      </div>
    )
  }
}

MenuItem.propTypes = {
  action: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}