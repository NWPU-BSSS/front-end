import React, { Component } from 'react'
import { NavLogged } from './NavLogged'
import { NavUnloggin } from '../components/nav-menu-components/NavUnloggin'
import { NavMenuSearch } from '../components/nav-menu-components/NavMenuSearch'
import { NavMenuDropdown } from '../components/nav-menu-components/NavMenuDropdown'
import { NavMenuAvatar } from '../components/nav-menu-components/NavMenuAvatar'
import { CaretDownOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../components/nav-menu-components/NavMenu.css'

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

class RightComponent extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    if (this.props.user.userId !== -1) {
      return <NavLogged/>
    } else {
      return <NavUnloggin/>
    }
  }
}

class NavMenu extends Component {

  constructor (props) {
    super(props)
    this.state = {
      languageIndex: 0
    }
  }

  // static propTypes = {
  //   userState: PropTypes.object.isRequired
  // }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleChangeLanguage = newIndex => {
    this.setState({ languageIndex: newIndex })
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
          <RightComponent user={this.props.userState}/>
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
  state => ({ userState: state.userState })
)(NavMenu)

export { NavMenu }



