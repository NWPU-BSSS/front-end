import React, { Component } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import './NavMenu.css'
import { Button, Input } from 'antd'

let { Search } = Input

const onSearch = value => console.log(value)

export class NavMenu extends Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">BSSS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">博客<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">代码</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">下载</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">问答</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    下拉菜单
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">活动</a>
                    <a className="dropdown-item" href="#">其他活动</a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">其他</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">社交</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="搜索" aria-label="Search"/>
                <button className="btn btn-danger my-2 my-sm-0" type="submit">搜索</button>
              </form>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">收藏</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">历史</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <img style={{
                      width: 25,
                      height: 25
                    }} src={'logo192.png'} alt="avatar"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}