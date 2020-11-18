import React from 'react'

const style = {
  width: '100%',
  fontSize: '22px'
}

export function H3 (props) {
  return <h3 style={style}>{props.children}</h3>
}