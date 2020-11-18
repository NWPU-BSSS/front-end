import React from 'react'

const style = {
  width: '100%',
  textAlign: 'center',
  fontSize: '36px'
}

export function H1 (props) {
  return <h1 style={style}>{props.children}</h1>
}