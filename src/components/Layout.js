import React, { Component } from 'react'
import { NavMenu } from '../containers/NavMenu'
import './Layout.css'
import { Footer } from './Footer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Layout extends Component {
  static propTypes = {
    showNav: PropTypes.bool.isRequired
  }

  render () {

    return (
      <div>
        {this.props.showNav ? <NavMenu/> : ''}
        <div className="base-layout-container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

Layout = connect(
  state => ({ showNav: state.showNav })
)(Layout)

export { Layout }
