import React, { Component } from 'react'
import { NavLogged } from './NavLogged'
import { NavUnLogged } from './NavUnLogged'
import { NavMenuSearch } from './NavMenuSearch'
import { NavMenuDropdown } from './NavMenuDropdown'
import { NavMenuAvatar } from './NavMenuAvatar'
import { CaretDownOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './NavMenu.css'
import { logout, useEn, useZh } from '../../@redux/actions'
import { SocialMenu } from './menus/SocialMenu'
import { BlogMenu } from './menus/BlogMenu'
import { Q_A_Menu } from './menus/Q_A_Menu'
import { DownloadMenu } from './menus/DownloadMenu'
import { CodeMenu } from './menus/CodeMenu'

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

SocialMenu.propTypes = language

DownloadMenu.propTypes = language

CodeMenu.propTypes = language

BlogMenu.propTypes = language

Q_A_Menu.propTypes = language

class RightComponent extends Component {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
    logged: PropTypes.node.isRequired,
    unLogged: PropTypes.node.isRequired
  }

  render () {
    // if (this.props.isLogin) {
    //   return <NavLogged logout={this.props.logout} language={this.props.language} {...this.props.user}/>
    // } else {
    //   return <NavUnLogged language={this.props.language}/>
    // }
    if (this.props.isLogin) {
      return this.props.logged
    } else {
      return this.props.unLogged
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
          <RightComponent isLogin={this.props.isLogin}
                          logged={<NavLogged language={this.props.language} logout={this.logout}/>}
                          unLogged={<NavUnLogged language={language}/>}
          />
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



