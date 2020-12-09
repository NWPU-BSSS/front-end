import React, { Component } from 'react'
import './PersonalInfo.css'
import { Button, Divider } from 'antd'
import PropTypes from 'prop-types'

function InfoBaseItem (props) {
  return (
    <div className="InfoBaseItem">
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  )
}

function InfoItemBox (props) {
  return (
    <div className="InfoItem">
      <div className="info-type">
        <div className="divider">
          <Divider className="border-000" orientation="left">{props.title}</Divider>
        </div>
        <Button className="ml-20" danger onClick={props.onEdit}>{props.button}</Button>
      </div>
      <div className="info-detail">
        {props.children}
      </div>
    </div>
  )
}

InfoItemBox.propTypes = {
  button: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  onEdit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export class PersonalInfo extends Component {

  static propTypes = {
    academy: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    codeAge: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    graduateTime: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    realName: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
  }

  handleEditAccountInfo = () => {
    alert('修改账号信息')
  }

  render () {
    const {username, nickname, introduction, realName, gender, university,  academy, class: studyClass, graduateTime, codeAge, level, avatar} = this.props

    return (
      <div className="PersonalInfo">
        <InfoItemBox button={'修改信息'} onEdit={this.handleEditAccountInfo} title={'账号信息'}>
          <InfoBaseItem content={username} title={'ID'}/>
          <InfoBaseItem content={nickname} title={'昵称'}/>
          <InfoBaseItem content={introduction} title={'简介'}/>
          <InfoBaseItem content={realName} title={'姓名'}/>
          <InfoBaseItem content={gender} title={'性别'}/>
        </InfoItemBox>
        <InfoItemBox onEdit={this.handleEditAccountInfo} title={'学历信息'}>
          <InfoBaseItem content={university} title={'学校'}/>
          <InfoBaseItem content={academy} title={'学院'}/>
          <InfoBaseItem content={studyClass} title={'班级'}/>
          <InfoBaseItem content={graduateTime} title={'毕业时间'}/>
        </InfoItemBox>
        <InfoItemBox button="Upload Resume" onEdit={this.handleEditAccountInfo} title={'简历上传'}>
          <InfoBaseItem content='Waiting Upload' title="Resume"/>
        </InfoItemBox>
      </div>
    )
  }
}

InfoBaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}




