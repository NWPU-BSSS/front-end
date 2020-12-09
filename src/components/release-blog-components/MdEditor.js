import React from 'react'
import './MdEditor.css'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from './CodeBlock'
import { connect } from 'react-redux'
import { editMarkdown } from '../../@redux/v2/actions'

const DEFAULT_SIZE = 500

class MdEditor extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      textareaHeight: DEFAULT_SIZE
    }

    this.key192flag = 0
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = e => {

  }

  handleInputMarkdown = e => {
    let previewHeight = this.preview.scrollHeight
    let textareaHeight = e.target.scrollHeight
    let height = Math.max(previewHeight, textareaHeight, DEFAULT_SIZE)
    this.setState({ textareaHeight: height })
    this.props.editMarkdown(e.target.value)
  }

  handleKeyPressMarkdown = e => {
    let previewHeight = this.preview.scrollHeight
    let textareaHeight = e.target.scrollHeight
    let height = Math.max(previewHeight, textareaHeight, DEFAULT_SIZE)
    if (e.keyCode === 9) {
      e.preventDefault()
      this.props.editMarkdown(this.props.markdown + '\t')
    } else if (e.keyCode === 13)
      return false
    else if (e.keyCode === 17) { //left ctrl
      this.setState({ textareaHeight: height })
    } else if (e.keyCode === 8) { //backspace
      this.setState({ textareaHeight: height })
    } else if (e.keyCode === 192) { // ~
      // e.preventDefault()
    }

    // console.log(e.keyCode)
  }

  render () {

    return (
      <div className="MdEditor" style={{
        height: this.state.textareaHeight
      }}>
        <div className="markdown-input">
          <textarea spellCheck={false} onKeyDown={this.handleKeyPressMarkdown} onChange={this.handleInputMarkdown}
                    value={this.props.markdown}/>
        </div>
        <div ref={div => this.preview = div} className="markdown-preview">
          <ReactMarkdown source={this.props.markdown} escapeHtml={false} renderers={{ code: CodeBlock }}
                         className="markdown-body"/>
        </div>
      </div>
    )
  }
}

MdEditor = connect(
  state => ({
    markdown: state.$ReleaseBlogPageState.content,
  }),
  { editMarkdown }
)(MdEditor)

export { MdEditor }