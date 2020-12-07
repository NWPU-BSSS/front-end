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

  handleEditAccountInfo = () => {
    alert('修改账号信息')
  }

  render () {
    return (
      <div className="PersonalInfo">
        <InfoItemBox button={'修改信息'} onEdit={this.handleEditAccountInfo} title={'账号信息'}>
          <InfoBaseItem content={'weixin_45646'} title={'ID'}/>
          <InfoBaseItem content={'陆喵喵学长'} title={'昵称'}/>
          <InfoBaseItem content={' 刘刘杰也叫陆喵喵'} title={'简介'}/>
          <InfoBaseItem content={'请填写'} title={'姓名'}/>
          <InfoBaseItem content={'男'} title={'性别'}/>
        </InfoItemBox>
        <InfoItemBox onEdit={this.handleEditAccountInfo} title={'学历信息'}>
          <InfoBaseItem content={'软件学院'} title={'学校'}/>
          <InfoBaseItem content={'西北工业大学'} title={'学院'}/>
          <InfoBaseItem content={'1401xx0x'} title={'班级'}/>
          <InfoBaseItem content={'2022年6月'} title={'毕业时间'}/>
        </InfoItemBox>
        <InfoItemBox button={'简历上传'} onEdit={this.handleEditAccountInfo} title={'简历上传'}>
          <InfoBaseItem content={'待上传'} title={'简历'}/>
        </InfoItemBox>
      </div>
    )
  }
}

InfoBaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}