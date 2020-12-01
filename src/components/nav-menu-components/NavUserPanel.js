import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  BankFilled,
  CheckCircleOutlined, CrownOutlined,
  DownloadOutlined,
  EditFilled,
  ExportOutlined,
  HeartOutlined,
  IdcardFilled,
  QuestionCircleFilled
} from '@ant-design/icons'

import './NavUserPanel.css'
import { Link } from 'react-router-dom'

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
      <a className="panel-item user-name">
        <div>{this.props.nickname}</div>
      </a>
      <a className="panel-item level">
        <div><CrownOutlined/>&nbsp;{GrowthSystem}</div>
        <div style={{ textAlign: 'center' }}>Lv{this.props.level}</div>
      </a>
      <div className="panel-item fl-wrapper">
        <a className="fl">
          <div>{Subscribe}&nbsp;<HeartOutlined/></div>
          <div>{this.props.followNum}</div>
        </a>
        <a className="fl">
          <div>{Fans}&nbsp;<CheckCircleOutlined/></div>
          <div>{this.props.fanNum}</div>
        </a>
      </div>
      <Link className="panel-item" to="/profile">
        <div><IdcardFilled/>&nbsp;{PersonalCentre}</div>
      </Link>
      <a className="panel-item">
        <div><EditFilled/>&nbsp;{MyBlog}</div>
      </a>
      <a className="panel-item">
        <div><BankFilled/>&nbsp;{MySchool}</div>
      </a>
      <a className="panel-item">
        <div><DownloadOutlined/>&nbsp;{MyDownload}</div>
      </a>
      <a className="panel-item">
        <div><QuestionCircleFilled/>&nbsp;{Help}</div>
      </a>
      <a className="panel-item" onClick={this.props.onLogout}>
        <div><ExportOutlined/>&nbsp;{Exit}</div>
      </a>
    </>
  }
}
