import React from 'react'
import { Type } from './types'
import { H1 } from './H1'
import { H2 } from './H2'
import { H3 } from './H3'
import { P } from './P'
import PropTypes from 'prop-types'


/**
 * 博客内容解析器
 */
export function Resolver (props) {
  switch (props.type) {
    case Type.H1:
      return <H1>{props.content}</H1>
    case Type.H2:
      return <H2>{props.content}</H2>
    case Type.H3:
      return <H3>{props.content}</H3>
    case Type.P:
      return <P>{props.content}</P>
    default:
      return <div>{props.content}</div>
  }
}

Resolver.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}