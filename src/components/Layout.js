import React, { Component } from 'react'
import { NavMenu } from './nav-menu-components/NavMenu'
import './Layout.css'
import { Row } from 'antd'

export class Layout extends Component {

  render () {
    return (
      <div>
        <NavMenu/>
        <Row className="base-layout-container">
          {this.props.children}
        </Row>
      </div>
    )
  }
}