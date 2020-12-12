import React from 'react'
import styles from './ProfileMenuItem.module.css'
import { Link } from 'react-router-dom'

export function ProfileMenuItem (props) {
  let {container, link} = styles
  return (
      <Link className={container} to={props.action}>{props.title}</Link>
  )
}