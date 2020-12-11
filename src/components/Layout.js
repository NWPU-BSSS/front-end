import React from 'react'
import { NavMenu } from './nav-menu-components/NavMenu'
import './Layout.css'
import { Footer } from './Footer'

const Layout = props => (
  <div>
    <NavMenu/>
    <div className="base-layout-container">
      {props.children}
    </div>
    <Footer/>
  </div>
)

export { Layout }
