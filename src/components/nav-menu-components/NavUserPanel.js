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

export class NavUserPanel extends Component {

  static propTypes = {
    username: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired,
    language: PropTypes.object.isRequired
  }

  render () {
    const { GrowthSystem, Subscribe, Fans, PersonalCentre, MyBlog, MySchool, MyDownload, Help, Exit } = this.props.language

    return <>
      <a className="panel-item user-name">
        <div>{this.props.username}</div>
      </a>
      <a className="panel-item level">
        <div><CrownOutlined/>&nbsp;{GrowthSystem}</div>
        <div style={{ textAlign: 'center' }}>Lv2</div>
      </a>
      <div className="panel-item fl-wrapper">
        <a className="fl">
          <div>{Subscribe}&nbsp;<HeartOutlined/></div>
          <div>12</div>
        </a>
        <a className="fl">
          <div>{Fans}&nbsp;<CheckCircleOutlined/></div>
          <div>9</div>
        </a>
      </div>
      <a className="panel-item">
        <div><IdcardFilled/>&nbsp;{PersonalCentre}</div>
      </a>
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