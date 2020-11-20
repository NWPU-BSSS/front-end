import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {jsx, javascript, sass, scss, markdown, sas, csharp, cpp, c, json, java, python, go, nginx} from 'react-syntax-highlighter/dist/esm/languages/prism'
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark'

/**
 * markdown 代码块语法高亮
 */
export class CodeBlock extends Component {
  static propTypes = {
    value: PropTypes.string,
    language: PropTypes.string
  }

  static defaultProps = {
    language: null
  }

  componentWillMount () {
    SyntaxHighlighter.registerLanguage('jsx', jsx)
    SyntaxHighlighter.registerLanguage('javascript', javascript)
    SyntaxHighlighter.registerLanguage('markdown', markdown)
    SyntaxHighlighter.registerLanguage('sass', sass)
    SyntaxHighlighter.registerLanguage('scss', scss)
    SyntaxHighlighter.registerLanguage('sas', sas)
    SyntaxHighlighter.registerLanguage('csharp', csharp)
    SyntaxHighlighter.registerLanguage('cpp', cpp)
    SyntaxHighlighter.registerLanguage('c', c)
    SyntaxHighlighter.registerLanguage('json', json)
    SyntaxHighlighter.registerLanguage('java', java)
    SyntaxHighlighter.registerLanguage('python', python)
    SyntaxHighlighter.registerLanguage('nginx', nginx)
    SyntaxHighlighter.registerLanguage('go', go)
  }

  render () {
    const { language, value = ''} = this.props
    // debugger
    return (
      <figure className="highlight">
        <SyntaxHighlighter language={language} style={style}>
          {value}
        </SyntaxHighlighter>
      </figure>
    )
  }
}