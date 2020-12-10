import React from 'react'

export function SocialMenu (props) {
  const { language } = props
  const { FindFriends, LeaveMessage, PillowTalk } = language // 找朋友，留言，悄悄话
  return (
    <>
      <a>{FindFriends}</a>
      <a>{LeaveMessage}</a>
      <a>{PillowTalk}</a>
    </>
  )
}