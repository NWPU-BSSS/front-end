import React, { Component } from 'react'
import './PersonalInfo.css'
import { Button, Divider } from 'antd'
import { ManOutlined, WomanOutlined } from '@ant-design/icons'
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
  button: PropTypes.string,
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
    const {username, nickname, introduction, realName, gender, university,  academy,   className, graduateTime, codeAge, level, avatar} = this.props

    return (
      <div className="PersonalInfo">
        <InfoItemBox button={'Edit'} onEdit={this.handleEditAccountInfo} title={'Account'}>
          <InfoBaseItem content={username} title={'Username'}/>
          <InfoBaseItem content={nickname} title={'Nickname'}/>
          <InfoBaseItem content={introduction} title={'Introduction'}/>
          <InfoBaseItem content={realName} title={'Real Name'}/>
          <InfoBaseItem content={[<ManOutlined />,<WomanOutlined />][gender]} title={'Gender'}/>
        </InfoItemBox>
        <InfoItemBox onEdit={this.handleEditAccountInfo} title={'Education'}>
          <InfoBaseItem content={university} title={'University'}/>
          <InfoBaseItem content={academy} title={'Academy'}/>
          <InfoBaseItem content={className} title={'Class'}/>
          <InfoBaseItem content={graduateTime} title={'Graduate'}/>
        </InfoItemBox>
        <InfoItemBox button="Upload" onEdit={this.handleEditAccountInfo} title={'Resume'}>
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




