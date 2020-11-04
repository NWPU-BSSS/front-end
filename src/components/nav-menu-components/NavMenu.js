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
  <a>找朋友</a>,
  <a>留言</a>,
  <a>悄悄话</a>
]

const downloadMenu = [
  <a>新建项目</a>
]

const codeMenu = [
  <a>新建项目</a>
]

const blogMenu = (
  <a>创作中心</a>
)

const queAnsMenu = [
  <a>我要提问</a>,
  <a>向我提问</a>,
  <a>回答</a>
]

export class NavMenu extends Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
      isLoggedIn: true,
      languageIndex: 0
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    let right = this.state.isLoggedIn ? <NavLogged/> : <NavUnloggin/>

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
          {right}
          <NavMenuDropdown title={<div style={{width: 100}}>{languageMenu[this.state.languageIndex]}  <CaretDownOutlined/></div>}>
            {languageMenu.map((item, index) => <a onClick={() => this.handleChangeLanguage(index)}>{item}</a>)}
          </NavMenuDropdown>
        </nav>
      </header>
    )
  }

  handleChangeLanguage (newIndex) {
    this.setState({ languageIndex: newIndex })
  }
}



