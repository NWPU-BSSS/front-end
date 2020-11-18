import React, { Component } from 'react'

import './ReleaseBlogComponents.css'
import { TreeCategory } from './TreeCategory'
import { MdEditor } from './MdEditor'
import { ToolBox } from './ToolBox'

/**
 * 博客编辑器
 */
export class BlogEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="BlogEditor">
        <div className="top">
          <ToolBox/>
        </div>
        <div className="editor">
          <TreeCategory/>
          <MdEditor/>
        </div>
      </div>
    )
  }
}