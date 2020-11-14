import React, { Component } from 'react'

import { btnDanger } from './@button-style'

import './NavMenuSearch.css'


export class NavMenuSearch extends Component {

  render () {
    return (
      <form className="bs-nav-search">
        <input type="text" placeholder="搜索"/>
        <button style={btnDanger} type="submit">搜索</button>
      </form>
    )
  }
}