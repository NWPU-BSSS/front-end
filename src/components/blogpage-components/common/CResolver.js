import React from 'react'
import PropTypes from 'prop-types'
import { Ch1 } from './Ch1'
import { Ch2 } from './Ch2'
import { Ch3 } from './Ch3'
import { Resolver } from './Resolver'

const { Type } = Resolver

/**
 * 博客内容解析器
 */
export function CResolver (props) {
  let { type, content, to } = props
  to = '/blog#' + to
  switch (type) {
    case Type.H1:
      return <Ch1 to={to}>{content}</Ch1>
    case Type.H2:
      return <Ch2 to={to}>{content}</Ch2>
    case Type.H3:
      return <Ch3 to={to}>{content}</Ch3>
    default:
      return ''
  }
}

CResolver.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}