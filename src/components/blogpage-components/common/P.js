import React from 'react'

const style = {
  width: '100%',
  fontSize: '18px',
  textIndent: '2em',
  marginLeft: '6em'
}

export function P (props) {
  return <p id={props.id} style={style}>{props.children}</p>
}