import React from 'react'
import { H1 } from './H1'
import { H2 } from './H2'
import { H3 } from './H3'
import { P } from './P'
import PropTypes from 'prop-types'

const Type = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  P: 'P'
}

/**
 * 博客内容解析器
 */
export function Resolver (props) {
  let {type, content, id} = props
  switch (type) {
    case Type.H1:
      return <H1 id={id}>{content}</H1>
    case Type.H2:
      return <H2 id={id}>{content}</H2>
    case Type.H3:
      return <H3 id={id}>{content}</H3>
    case Type.P:
      return <P id={id}>{content}</P>
    default:
      return <div id={id}>{content}</div>
  }
}

Resolver.Type = Type

Resolver.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}