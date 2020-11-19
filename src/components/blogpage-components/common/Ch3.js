import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const style = {
  width: '100%',
  fontSize: '14px',
  marginLeft: '2em'
}

export function Ch3 (props) {
  return <a href={props.to} style={style}>{props.children}</a>
}

Ch3.propTypes = {
  to: PropTypes.string.isRequired
}