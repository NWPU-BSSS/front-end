import React, { Component } from 'react'
import { NavLogged } from './NavLogged'
import { NavUnloggin } from './NavUnloggin'
import { NavMenuSearch } from './NavMenuSearch'
import { NavMenuToggleButton } from './NavMenuToggleButton'
import { NavMenuDropdown } from './NavMenuDropdown'
import { NavMenuAvatar } from './NavMenuAvatar'
import { CaretDownOutlined } from '@ant-design/icons'

import './NavMenu.css'

const languageMenu = [
  '简体中文',
  'English'
]

const socialMenu = [
  <a key={'1'}>找朋友</a>,
  <a key={'2'}>留言</a>,
  <a key={'3'}>悄悄话</a>
]

const downloadMenu = [
  <a key={'1'}>新建项目</a>
]

const codeMenu = [
  <a key={'1'}>新建项目</a>
]

const blogMenu = (
  <a key={'1'}>创作中心</a>
)

const queAnsMenu = [
  <a key={'1'}>我要提问</a>,
  <a key={'2'}>向我提问</a>,
  <a key={'3'}>回答</a>
]

function RightComponent (props) {
  if (props.login) {
    return <NavLogged onLogOut={props.onLogOut}/>
  } else {
    return <NavUnloggin onLogIn={props.onLogIn}/>
  }
}

export class NavMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      collapsed: true,
      isLoggedIn: true,
      languageIndex: 0
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleLogOut () {
    this.setState({ isLoggedIn: false })
  }

  handleLogIn () {
    this.setState({ isLoggedIn: true })
  }

  render () {
    return (
      <header className="bs-nav-header">
        <nav className="bs-nav">
          <NavMenuAvatar/>
          <div className="bs-nav-dropdown-list">
            <NavMenuDropdown title="博客">{blogMenu}</NavMenuDropdown>
            <NavMenuDropdown title="代码">{codeMenu}</NavMenuDropdown>
            <NavMenuDropdown title="下载">{downloadMenu}</NavMenuDropdown>
            <NavMenuDropdown title="问答">{queAnsMenu}</NavMenuDropdown>
            <NavMenuDropdown title="社交">{socialMenu}</NavMenuDropdown>
          </div>
          <NavMenuSearch/>
          <RightComponent login={this.state.isLoggedIn} onLogIn={this.handleLogIn} onLogOut={this.handleLogOut}/>
          <NavMenuDropdown
            title={<div style={{ width: 100 }}>{languageMenu[this.state.languageIndex]} <CaretDownOutlined/></div>}>
            {languageMenu.map((item, index) => <a key={item.toString()}
                                                  onClick={() => this.handleChangeLanguage(index)}>{item}</a>)}
          </NavMenuDropdown>
        </nav>
      </header>
    )
  }

  handleChangeLanguage (newIndex) {
    this.setState({ languageIndex: newIndex })
  }
}



