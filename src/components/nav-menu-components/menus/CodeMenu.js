import React from 'react'

export function CodeMenu (props) {
  const { language } = props
  const { NewProject } = language //新建项目
  return <a>{NewProject}</a>
}