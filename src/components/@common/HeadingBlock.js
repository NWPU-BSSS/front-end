import React, { Component } from 'react'
import Heading from './Heading'

export class HeadingBlock extends Component {
  renderHtml = () => {
    const { level, children } = this.props
    if (children && children.length > 0) {
      const nodeValue = children[0].props.value
      return (
        <Heading level={`h${level}`} id={nodeValue}>
          <span className="title">{children}</span>
          <a href={`#${nodeValue}`} className="link">#</a>
        </Heading>
      )
    } else {
      return <>{children}</>
    }
  }

  render () {
    return (
      <>{this.renderHtml()}</>
    )
  }
}