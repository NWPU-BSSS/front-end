import React, { Component } from 'react'
import styles from './AdminHome.module.css'
import PropTypes from 'prop-types'

export class InfoItem extends Component{
  render () {
    return (
      <div className={styles.infoItem}>
        <div className={`${ styles.infoText } ${styles.top}`}>{this.props.text}</div>
        <div className={`${ styles.infoText } ${styles.bottom}`}>{this.props.count}</div>
      </div>
    )
  }
}

class AdminHome extends Component {

  render () {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

AdminHome.propTypes = {}

export default AdminHome

InfoItem.propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}