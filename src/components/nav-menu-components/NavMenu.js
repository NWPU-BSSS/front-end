import React, { Component } from 'react'
import { NavLogged } from './NavLogged'
import { NavUnloggin } from './NavUnloggin'
import { NavMenuSearch } from './NavMenuSearch'
import { NavMenuDropdown } from './NavMenuDropdown'
import { NavMenuAvatar } from './NavMenuAvatar'
import { CaretDownOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './NavMenu.css'
import { logout, useEn, useZh } from '../../@redux/v2/actions'

/**
 * 语言选项菜单 !important 顺序不可随意调换！ 关联checkLanguage的内容
 *
 * @type {string[]}
 */
const languageMenu = [
  'English',
  '简体中文'
]

const language = {
  language: PropTypes.object.isRequired
}

function SocialMenu (props) {
  const { language } = props
  const { FindFriends, LeaveMessage, PillowTalk } = language // 找朋友，留言，悄悄话
  return (
    <>
      <a>{FindFriends}</a>
      <a>{LeaveMessage}</a>
      <a>{PillowTalk}</a>
    </>
  )
}

SocialMenu.propTypes = language

function DownloadMenu (props) {
  const { language } = props
  const { MyResources } = language //我的资源
  return <a>{MyResources}</a>
}

DownloadMenu.propTypes = language

function CodeMenu (props) {
  const { language } = props
  const { NewProject } = language //新建项目
  return <a>{NewProject}</a>
}

CodeMenu.propTypes = language

function BlogMenu (props) {
  const { language } = props
  const { CreationCentre } = language //创作中心
  return <a>{CreationCentre}</a>
}

BlogMenu.propTypes = language

function Q_A_Menu (props) {
  const { language } = props
  const { AskQuestion, ReceivedQuestion, Answer } = language //我要提问，向我提问，回答
  return (
    <>
      <a>{AskQuestion}</a>
      <a>{ReceivedQuestion}</a>
      <a>{Answer}</a>
    </>
  )
}

Q_A_Menu.propTypes = language

class RightComponent extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    language: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    isLogin: PropTypes.bool.isRequired
  }

  render () {
    if (this.props.isLogin) {
      return <NavLogged logout={this.props.logout} language={this.props.language} {...this.props.user}/>
    } else {
      return <NavUnloggin language={this.props.language}/>
    }
  }
}

class NavMenu extends Component {

  constructor (props) {
    super(props)
    this.state = {
      languageIndex: 0
    }
    //顺序不可随意变换，关联 languageMenu的内容
    this.checkLanguage = [this.props.useEn, this.props.useZh]
  }

  static propTypes = {
    clearAccessToken: PropTypes.func,
    language: PropTypes.object,
    logout: PropTypes.func,
    useEn: PropTypes.func,
    useZh: PropTypes.func,
    userState: PropTypes.object
  }

  logout = () => {
    this.props.logout()
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleChangeLanguage = newIndex => {
    this.setState({ languageIndex: newIndex })
    let method = this.checkLanguage[newIndex]
    method()
  }

  render () {
    const { FindFriends, LeaveMessage, PillowTalk, MyResources, NewProject, CreationCentre, AskQuestion, ReceivedQuestion, Answer, Blog, Code, Download, QandA, Social,  Search, UploadResource, WriteBlog, WriteCode, Subscribe } = this.props.language
    return (
      <header className="NavMenu">
        <nav className="bs-nav">
          <NavMenuAvatar/>
          <div className="bs-nav-dropdown-list">
            <NavMenuDropdown title={Blog}>{
              <BlogMenu language={{ CreationCentre }}/>}</NavMenuDropdown>
            <NavMenuDropdown title={Code}>{
              <CodeMenu language={{ NewProject }}/>}</NavMenuDropdown>
            <NavMenuDropdown title={Download}>{
              <DownloadMenu language={{ MyResources }}/>}</NavMenuDropdown>
            <NavMenuDropdown title={QandA}>{
              <Q_A_Menu language={{ AskQuestion, ReceivedQuestion, Answer }}/>}</NavMenuDropdown>
            <NavMenuDropdown title={Social}>{
              <SocialMenu language={{ FindFriends, LeaveMessage, PillowTalk }}/>}</NavMenuDropdown>
          </div>
          <NavMenuSearch language={{Search}}/>
          <RightComponent isLogin={this.props.isLogin} logout={this.logout} language={this.props.language} user={this.props.baseInfo}/>
          <NavMenuDropdown
            title={<div style={{ width: 100 }}>{languageMenu[this.state.languageIndex]} <CaretDownOutlined/></div>}>
            {languageMenu.map((item, index) => <a key={item.toString()}
                                                  onClick={() => this.handleChangeLanguage(index)}>{item}</a>)}
          </NavMenuDropdown>
        </nav>
      </header>
    )
  }
}

NavMenu = connect(
  state => {
    const { NavMenuAndBottom } = state.$Language
    let { baseInfo } = state.$UserInfoState
    return ({
      isLogin: state.$UserState.userId !== -1,
      language: NavMenuAndBottom,
      baseInfo
    })
  },
  { useEn, useZh, logout }
)(NavMenu)

export { NavMenu }



