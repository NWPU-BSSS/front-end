import React, { Component } from 'react'
import './BlogContent.css'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from '../release-blog-components/CodeBlock'
import PropTypes from 'prop-types'

export class BlogContent extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  render () {
    return (
      <div className="BlogContent">
        <ReactMarkdown className="markdown-body" source={this.props.content} renderers={{
          code: CodeBlock
        }}/>
      </div>
    )
  }
}