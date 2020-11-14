import React, { Component } from 'react'

import './Footer.css'

import logo from '../assets/img/logo_u9.png'

export class Footer extends Component {

  render () {
    return (
      <div className="bsss-footer">
        <a className="title" href="/">
          BSSS - 软件学院的专属博客
        </a>
        <a className="body" href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
    )
  }
}