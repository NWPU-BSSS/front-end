import React, { Component } from 'react'
import './PersonalInfoMenu.css'

function MenuItem (props) {
  return (
    <div className={'personal-info-menu-item'}>
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

export class PersonalInfoMenu extends Component {


  render () {
    const { PersonalInfo, AccountSecurity, Collection, Follower, Fans, MyBlog, MyDownload, MyAnswer, MyCollege} = languageHere;

    return (
      <div className={'personal-info-menu'}>
        <MenuItem title={PersonalInfo}/>
        <MenuItem title={AccountSecurity}/>
        <MenuItem title={Collection}/>
        <MenuItem title={Follower}/>
        <MenuItem title={Fans}/>
        <MenuItem title={MyBlog}/>
        <MenuItem title={MyDownload}/>
        <MenuItem title={MyAnswer}/>
        <MenuItem title={MyCollege}/>
      </div>
    )
  }
}