import React from 'react'

const style = {
  width: '100%',
  fontSize: '18px'
}

export function P (props) {
  return <p style={style}>{props.children}</p>
}