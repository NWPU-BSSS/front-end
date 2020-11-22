import React, { Component } from 'react'
import { btnDanger } from './@button-style'
import './NavMenuSearch.css'
import PropTypes from 'prop-types'

export class NavMenuSearch extends Component {

  static propTypes = {
    language: PropTypes.object.isRequired
  }

  render () {
    const { Search } = this.props.language
    return (
      <form className="NavMenuSearch">
        <input type="text" placeholder={Search}/>
        <button style={btnDanger} type="submit">{Search}</button>
      </form>
    )
  }
}