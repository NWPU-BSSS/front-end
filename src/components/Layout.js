import React, { Component } from 'react'
import { NavMenu } from './nav-menu-components/NavMenu'
import './Layout.css'
import { Footer } from './Footer'

export class Layout extends Component {

  render () {
    return (
      <div>
        <NavMenu/>
        <div className="base-layout-container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}