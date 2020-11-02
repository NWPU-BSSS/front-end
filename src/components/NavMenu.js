import React, { Component } from 'react'
import { NavItem, NavLink } from 'reactstrap'
import './NavMenu.css'
import { UserHasLoggedIn } from './NavMenuComponents/UserHasLoggedIn'
import { UserNotLoggedIn } from './NavMenuComponents/UserNotLoggedIn'
import { NavMenuSearch } from './NavMenuComponents/NavMenuSearch'
import { NavMenuToggleButton } from './NavMenuComponents/NavMenuToggleButton'
import { NavMenuDropdown } from './NavMenuComponents/NavMenuDropdown'

const languageMenu = [
  { text: '中文', url: '#' },
  { text: 'English', url: '#' },
]

const socialMenu = [
  { text: '找朋友', url: '#' },
  { text: '留言', url: '#' },
  { text: '悄悄话', url: '#' },
]

const downloadMenu = [
  { text: '我的资源', url: '#' }
]

const codeMenu = [
  { text: '新建项目', url: '#' }
]

const blogMenu = [
  { text: '创作中心', url: '#' }
]

const queAnsMenu = [
  { text: '我要提问', url: '#' },
  { text: '向我提问', url: '#' },
  { text: '回答', url: '#' },
]

export class NavMenu extends Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
      isLoggedIn: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    let right = this.state.isLoggedIn ? <UserHasLoggedIn/> : <UserNotLoggedIn/>

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="bsss-nav container-fluid">
            <a className="navbar-brand" href="#">BSSS</a>
            <ul className="navbar-nav mr-auto" style={{flexDirection: 'row'}}>
              <NavMenuDropdown name="博客" items={blogMenu}/>
              <NavMenuDropdown name="代码" items={codeMenu}/>
              <NavMenuDropdown name="下载" items={downloadMenu}/>
              <NavMenuDropdown name="问答" items={queAnsMenu}/>
              <NavMenuDropdown name="社交" items={socialMenu}/>
            </ul>
            <NavMenuToggleButton/>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav mr-auto">
                <NavMenuSearch/>
              </ul>
              {right}
              <ul className="navbar-nav mr-auto">
                <NavMenuDropdown name="语言" items={languageMenu}/>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}