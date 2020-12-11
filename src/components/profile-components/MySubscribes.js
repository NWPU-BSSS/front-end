import React, { Component } from 'react'
import styles from './MySubscribes.module.css'
import FanList from '../base/FanList'

export class MySubscribes extends Component {

  render () {
    return (
      <div className={styles.container}>
        <FanList fanList={this.props.fans}/>
      </div>
    )
  }
}