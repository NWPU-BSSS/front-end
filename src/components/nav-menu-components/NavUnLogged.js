import React, { Component } from 'react'
import { btnDanger,btnSuccess } from './@button-style'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class NavUnLogged extends Component {

  static propTypes = {
    language: PropTypes.any.isRequired
  }

  render () {
    const { Login, QuickRegister } = this.props.language

    return (
      <div className="bs-nav-guest">
        <Link to="/login">
          <button style={btnDanger}>{Login}</button>
        </Link>
        <Link to="/register">
          <button style={btnSuccess}>{QuickRegister}</button>
        </Link>
      </div>
    )
  }
}