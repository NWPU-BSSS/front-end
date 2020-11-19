import React from 'react'

const style = {
  width: '100%',
  fontSize: '22px',
  marginLeft: '4em'
}

export function H3 (props) {
  return <h3 id={props.id} style={style}>{props.children}</h3>
}