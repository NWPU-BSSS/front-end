import React from 'react'
import './HomePageLeft.css'

function HomePageLeft (props) {
  return (
    <div className="HomePageLeft">
      {props.children}
    </div>
  )
}

export {HomePageLeft}