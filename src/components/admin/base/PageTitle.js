import React, { Component } from 'react'
import styles from './PageTitle.module.css'

export class PageTitle extends Component {
  render () {
    return (
      <div className={styles.pageTitle}>
        {this.props.children}
      </div>
    )
  }
}