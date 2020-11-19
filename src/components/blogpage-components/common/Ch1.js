import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  width: '100%',
  fontSize: '24px'
}

export function Ch1 (props) {
  return <a href={props.to} style={style}>{props.children}</a>
}

Ch1.propTypes = {
  to: PropTypes.string.isRequired
}