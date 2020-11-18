import React from 'react'
import { NavMenu } from '../containers/NavMenu'
import './Layout.css'
import { Footer } from './Footer'

const Layout = props => (
  <div>
    <NavMenu/>
    <div className="base-layout-container">
      {props.children}
    </div>
    <Footer/>
    {/*<button onClick={this.handleClick}>ajax</button>*/}
  </div>
)

export { Layout }
