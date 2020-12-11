import React from 'react'
import './HomePageRight.css'

function HomePageRight (props) {
  return (
    <div className="HomePageRight">
      {props.children}
    </div>
  )
}

export { HomePageRight }