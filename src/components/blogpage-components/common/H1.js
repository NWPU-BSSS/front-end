import React from 'react'

const style = {
  width: '100%',
  fontSize: '36px'
}

export function H1 (props) {
  return <h1 id={props.id} style={style}>{props.children}</h1>
}