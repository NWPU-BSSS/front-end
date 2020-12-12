import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  BankFilled,
  CheckCircleOutlined,
  CrownOutlined, DownloadOutlined,
  EditFilled, ExportOutlined,
  HeartOutlined,
  IdcardFilled, QuestionCircleFilled
} from '@ant-design/icons'

import './NavUserPanel.css'
import { Link } from 'react-router-dom'

class NavUserPanelItem extends Component{
  static propTypes = {
    action: PropTypes.string,
    before: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired
  }

  render () {
    const { before, action, title, onClick } = this.props
    return (
      <Link to={action} className="panel-item" onClick={onClick}>
        <div>{before}&nbsp;{title}</div>
      </Link>
    )
  }
}

export class NavUserPanel extends Component {

  static propTypes = {
    language: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
    username: PropTypes.string,
    avatar: PropTypes.string,
    nickname: PropTypes.string,
    level: PropTypes.number,
    codeAge: PropTypes.number,
    blogNum: PropTypes.number,
    followNum: PropTypes.number,
    fanNum: PropTypes.number
  }

  render () {
    const { GrowthSystem, Subscribe, Fans, PersonalCentre, MyBlog, MySchool, MyDownload, Help, Exit } = this.props.language

    return <>
      <Link to="/profile/info" className="panel-item user-name">
        <div>{this.props.nickname}</div>
      </Link>
      <Link to="/profile/info" className="panel-item level">
        <div><CrownOutlined/>&nbsp;{GrowthSystem}</div>
        <div style={{ textAlign: 'center' }}>Lv{this.props.level}</div>
      </Link>
      <div className="panel-item fl-wrapper">
        <Link to="/profile/subscribe" className="fl">
          <div>{Subscribe}&nbsp;<HeartOutlined/></div>
          <div>{this.props.followNum}</div>
        </Link>
        <Link to="/profile/fans" className="fl">
          <div>{Fans}&nbsp;<CheckCircleOutlined/></div>
          <div>{this.props.fanNum}</div>
        </Link>
      </div>
      <NavUserPanelItem action="/profile/info" title={PersonalCentre} before={<IdcardFilled/>}/>
      <NavUserPanelItem action="/profile/blogs" title={MyBlog} before={<EditFilled/>}/>
      <NavUserPanelItem action="/profile/school" title={MySchool} before={<BankFilled/>}/>
      <NavUserPanelItem action="/profile/download" title={MyDownload} before={<DownloadOutlined/>}/>
      <NavUserPanelItem action="/profile/help" title={Help} before={<QuestionCircleFilled/>}/>
      <NavUserPanelItem onClick={this.props.onLogout} title={Exit} before={<ExportOutlined/>}/>
    </>
  }
}
