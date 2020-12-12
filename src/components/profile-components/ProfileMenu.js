import React, { Component } from 'react'
import './PersonalInfoMenu.css'
import PropTypes from 'prop-types'
import { ProfileMenuItem } from './ProfileMenuItem'
import styles from './ProfileMenu.module.css'

export class ProfileMenu extends Component {


  render () {

    return (
      <div className={styles.ProfileMenu}>
        {this.props.children}
      </div>
    )
  }
}

ProfileMenuItem.propTypes = {
  action: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}