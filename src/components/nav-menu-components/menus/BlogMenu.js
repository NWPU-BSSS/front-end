import React from 'react'

export function BlogMenu (props) {
  const { language } = props
  const { CreationCentre } = language //创作中心
  return <a>{CreationCentre}</a>
}