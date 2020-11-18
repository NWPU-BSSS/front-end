import React, { Component } from 'react'
import { Resolver } from './common/Resolver'
import { CResolver } from './common/CResolver'

const { Type } = Resolver

const init = [
  { type: Type.H1, content: '一级标题', anchor: '1' },
  { type: Type.H2, content: '二级标题', anchor: '2' },
  { type: Type.H3, content: '三级标题', anchor: '3' },
  { type: Type.H2, content: '二级标题', anchor: '4' },
  { type: Type.P, content: '正文', anchor: '5' },
]

export class BlogCategory extends Component {

  render () {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '250px'
      }}>
        {
          init.map(({ type, content, anchor }, index) => <CResolver key={index} type={type} content={content} to={anchor}/>)
        }
      </div>
    )
  }
}