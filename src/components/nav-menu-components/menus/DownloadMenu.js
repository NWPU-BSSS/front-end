import React from 'react'

export function DownloadMenu (props) {
  const { language } = props
  const { MyResources } = language //我的资源
  return <a>{MyResources}</a>
}