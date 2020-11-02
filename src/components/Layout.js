import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'
import './Layout.css'

export class Layout extends Component {

  render () {
    return (
      <div>
        <NavMenu/>
        <Container className="base-layout-container" fluid>
          {this.props.children}
        </Container>
      </div>
    )
  }
}