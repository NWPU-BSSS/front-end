import React from 'react'

const style = {
  width: '100%',
  fontSize: '28px',
  marginLeft: '2em'
}

export function H2 (props) {
  return <h2 id={props.id} style={style}>{props.children}</h2>
}