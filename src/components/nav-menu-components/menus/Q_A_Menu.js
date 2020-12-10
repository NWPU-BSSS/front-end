import React from 'react'

export function Q_A_Menu (props) {
  const { language } = props
  const { AskQuestion, ReceivedQuestion, Answer } = language //我要提问，向我提问，回答
  return (
    <>
      <a>{AskQuestion}</a>
      <a>{ReceivedQuestion}</a>
      <a>{Answer}</a>
    </>
  )
}