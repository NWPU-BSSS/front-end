import React, { Component } from 'react'
import styles from './AdminHome.module.css'
import PropTypes from 'prop-types'
import { PageTitle } from './base/PageTitle'

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
      <div className={styles.page}>
        <PageTitle>Insights</PageTitle>
        <div className={styles.container}>
          <InfoItem count={1} text="New Blogs"/>
          <InfoItem count={2} text="All Blogs"/>
          <InfoItem count={3} text="New Users"/>
          <InfoItem count={4} text="All Users"/>
        </div>
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