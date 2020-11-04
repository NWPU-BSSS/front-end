import React, { Component } from 'react'

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

export class NavUserPanel extends Component {

  render () {
    return [
      <a className="panel-item user-name">
        <div>Tom</div>
      </a>,
      <a className="panel-item level">
        <div><CrownOutlined />&nbsp;成长体系</div>
        <div style={{textAlign: 'center'}}>Lv2</div>
      </a>,
      <div className="panel-item fl-wrapper">
        <a className="fl">
          <div>关注&nbsp;<HeartOutlined /></div>
          <div>12</div>
        </a>
        <a className="fl">
          <div>粉丝&nbsp;<CheckCircleOutlined /></div>
          <div>9</div>
        </a>
      </div>,
      <a className="panel-item">
        <div><IdcardFilled/>&nbsp;个人中心</div>
      </a>,
      <a className="panel-item">
        <div><EditFilled/>&nbsp;我的博客</div>
      </a>,
      <a className="panel-item">
        <div><BankFilled />&nbsp;我的学院</div>
      </a>,
      <a className="panel-item">
        <div><DownloadOutlined/>&nbsp;我的下载</div>
      </a>,
      <a className="panel-item">
        <div><QuestionCircleFilled/>&nbsp;帮助</div>
      </a>,
      <a className="panel-item">
        <div><ExportOutlined />&nbsp;退出登录</div>
      </a>
    ]
  }
}