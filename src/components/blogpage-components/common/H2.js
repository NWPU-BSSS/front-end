import React from 'react'

const style = {
  width: '100%',
  fontSize: '28px'
}

export function H2 (props) {
  return <h2 style={style}>{props.children}</h2>
}