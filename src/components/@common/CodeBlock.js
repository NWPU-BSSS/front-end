import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {jsx, javascript, sass, scss, markdown, sas} from 'react-syntax-highlighter/dist/esm/languages/prism'
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark'

/**
 * markdown 代码块语法高亮
 */
export class CodeBlock extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  }

  static defaultProps = {
    language: null
  }

  componentWillMount () {
    SyntaxHighlighter.registerLanguage('jsx', jsx)
    SyntaxHighlighter.registerLanguage('javascript', javascript)
  }

  render () {
    const { language, value} = this.props
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={language} style={style}>
          {value}
        </SyntaxHighlighter>
      </figure>
    )
  }
}