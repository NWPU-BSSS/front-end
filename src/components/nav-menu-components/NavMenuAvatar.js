import React, { Component } from 'react'
import { NavMenuDropdown } from './NavMenuDropdown'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import './NavLogged.css'
import logo from '../../assets/img/logo_u9.png'

export class NavMenuAvatar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      followCount: 0,
      fanCount: 0,
      name: '孙悟空',
      level: 1
    }

    this.handleClickAvatar = this.handleClickAvatar.bind(this)
  }

  handleClickAvatar(){
    this.setState({
      showOption: true
    })
  }

  render () {
    return (
      <div style={{
        height: '100%'
      }}>
        <a href="/"><img style={{height: '100%'}} src={logo} alt="logo"/></a>
      </div>
    )
  }
}