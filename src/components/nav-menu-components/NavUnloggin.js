import React, { Component } from 'react'
import { btnDanger,btnSuccess } from './@button-style'
import { Link } from 'react-router-dom'

export class NavUnloggin extends Component {

  render () {
    return (
      <div className="bs-nav-guest">
        <Link to="/login">
          <button style={btnDanger}>登陆</button>
        </Link>
        <Link to="/register">
          <button style={btnSuccess}>快速注册</button>
        </Link>
      </div>
    )
  }
}