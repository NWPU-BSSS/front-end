import React, { Component } from 'react'
import { NavMenu } from '../containers/NavMenu'
import './Layout.css'
import { Footer } from './Footer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserInfo } from '../@api'

class Layout extends Component {
  handleClick = async () => {
    await getUserInfo({ userId: 1 })
  }

  render () {

    return (
      <div>
        <NavMenu/>
        <div className="base-layout-container">
          {this.props.children}
        </div>
        <Footer/>
        {/*<button onClick={this.handleClick}>ajax</button>*/}
      </div>
    )
  }
}

Layout = connect(
  state => ({ showNav: state.showNav })
)(Layout)

export { Layout }
