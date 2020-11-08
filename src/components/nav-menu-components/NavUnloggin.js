import React, { Component } from 'react'
import { btnDanger,btnSuccess } from './@button-style'

export class NavUnloggin extends Component {

  render () {
    return (
      <div className="bs-nav-guest">
        <button style={btnDanger}>登陆</button>
        <button style={btnSuccess}>快速注册</button>
      </div>
    )
  }
}