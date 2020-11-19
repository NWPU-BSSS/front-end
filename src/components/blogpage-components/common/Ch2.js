import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const style = {
  width: '100%',
  fontSize: '18px',
  marginLeft: '1em'
}

export function Ch2 (props) {
  return <a href={props.to} style={style}>{props.children}</a>
}

Ch2.propTypes = {
  to: PropTypes.string.isRequired
}