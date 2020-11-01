import React, { Component } from 'react'
import './NavMenuDropdown.css'

export class NavMenuDropdown extends Component {

  render () {
    return (
      <li className="nav-item dropdown bsss-nav-dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.props.name}
        </a>
        <div className="dropdown-menu" style={{ backgroundColor: '#343a40' }} aria-labelledby="navbarDropdown">
          {
            (this.props.items || []).map(item => (
              <a className="dropdown-item" key={item.toString()} href={item.link}>{item.text}</a>
            ))
          }
        </div>
      </li>
    )
  }
}

