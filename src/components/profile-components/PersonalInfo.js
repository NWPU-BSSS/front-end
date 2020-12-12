import React, { Component } from 'react'
import './PersonalInfo.css'
import { Button, Divider, Input, Modal, Radio, Space } from 'antd'
import { ManOutlined, WomanOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserInfoAsync, setUserInfoAsync } from '../../@redux/actions_async'

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
  onEdit: PropTypes.func,
  title: PropTypes.string.isRequired
}

export class PersonalInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      nickname: '',
      introduction: '',
      realName: '',
      university: '',
      className: '',
      academy: '',
      gender: ''
    }
  }

  componentWillMount () {
    this.props.getUserInfoAsync()

  }

  componentWillReceiveProps (nextProps, nextContext) {
    let { nickname, introduction, realName, university, className, academy, gender, username } = nextProps
    this.setState({ nickname, introduction, realName, university, className, academy, gender,username })
  }

  static propTypes = {
    academy: PropTypes.string,
    avatar: PropTypes.string,
    class: PropTypes.string,
    className: PropTypes.any,
    codeAge: PropTypes.string,
    gender: PropTypes.string,
    graduateTime: PropTypes.string,
    introduction: PropTypes.string,
    level: PropTypes.number,
    nickname: PropTypes.string,
    realName: PropTypes.string,
    university: PropTypes.string,
    username: PropTypes.string
  }

  handleEditAccountInfo = () => {
    this.setState({ showModal: true })
  }

  handleModalOk = () => {
    this.props.setUserInfoAsync({ ...this.state })
    this.setState({ showModal: false })
  }

  handleModalCancel = () => {
    this.setState({ showModal: false })
  }

  handleInputNickname = ({ target: { value: nickname } }) => {
    this.setState({ nickname })
  }

  handleInputIntroduction = ({ target: { value: introduction } }) => {
    this.setState({ introduction })
  }

  handleInputRealName = ({ target: { value: realName } }) => {
    this.setState({ realName })
  }

  handleInputUniversity = ({ target: { value: university } }) => {
    this.setState({ university })
  }

  handleInputClassName = ({ target: { value: className } }) => {
    this.setState({ className })
  }

  handleInputAcademy = ({ target: { value: academy } }) => {
    this.setState({ academy })
  }

  handleInputGender = ({ target: { value: gender } }) => {
    this.setState({ gender })
  }

  render () {
    const { username, nickname, introduction, realName, gender, university, academy, className, graduateTime } = this.props
    return (
      <div className="PersonalInfo">
        <InfoItemBox button={'Edit'} onEdit={this.handleEditAccountInfo} title={'Account'}>
          <InfoBaseItem content={username} title={'Username'}/>
          <InfoBaseItem content={nickname} title={'Nickname'}/>
          <InfoBaseItem content={introduction} title={'Introduction'}/>
          <InfoBaseItem content={realName} title={'Real Name'}/>
          <InfoBaseItem content={[<ManOutlined/>, <WomanOutlined/>][gender]} title={'Gender'}/>
        </InfoItemBox>
        <InfoItemBox title={'Education'}>
          <InfoBaseItem content={university} title={'University'}/>
          <InfoBaseItem content={academy} title={'Academy'}/>
          <InfoBaseItem content={className} title={'Class'}/>
          <InfoBaseItem content={graduateTime} title={'Graduate'}/>
        </InfoItemBox>
        <InfoItemBox button="Upload" onEdit={this.handleEditAccountInfo} title={'Resume'}>
          <InfoBaseItem content='Waiting Upload' title="Resume"/>
        </InfoItemBox>
        <Modal
          visible={this.state.showModal}
          title="Edit Profile"
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          maskClosable={false}
        >
          <Space direction="vertical">
            <Input onChange={this.handleInputNickname} value={this.state.nickname} maxLength={20}
                   addonBefore={<span>Nickname</span>}/>
            <Input.TextArea onChange={this.handleInputIntroduction} value={this.state.introduction} maxLength={60}
                   addonBefore={<span>Introduction</span>}/>
            <Input onChange={this.handleInputRealName} value={this.state.realName} maxLength={20}
                   addonBefore={<span>Real Name</span>}/>
            <Input onChange={this.handleInputUniversity} value={this.state.university} maxLength={20}
                   addonBefore={<span>University</span>}/>
            <Input onChange={this.handleInputClassName} value={this.state.className} maxLength={20}
                   addonBefore={<span>Class Name</span>}/>
            <Input onChange={this.handleInputAcademy} value={this.state.academy} maxLength={20}
                   addonBefore={<span>Academy</span>}/>
            <Radio.Group value={this.state.gender} onChange={this.handleInputGender}>
              <Radio value={0}><ManOutlined/></Radio>
              <Radio value={1}><WomanOutlined/></Radio>
            </Radio.Group>
          </Space>
        </Modal>
      </div>
    )
  }
}

PersonalInfo = connect(
  state => {
    return {
      ...state.$UserInfoState.userInfo
    }
  },
  { setUserInfoAsync, getUserInfoAsync }
)(PersonalInfo)

InfoBaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}