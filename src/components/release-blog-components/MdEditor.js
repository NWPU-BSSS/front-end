import React from 'react'
import './ReleaseBlogComponents.css'
import ReactMarkdown from 'react-markdown'
import './github-markdown.min.css'

const DEFAULT_SIZE = 500

export class MdEditor extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      markdown: '',
      textareaHeight: DEFAULT_SIZE
    }
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
    this.setState({
      markdown: e.target.value,
      textareaHeight: height
    })
  }

  handleKeyPressMarkdown = e => {
    if (e.keyCode === 9) {
      e.preventDefault()
      this.setState({
        markdown: this.state.markdown + '\t'
      })
    } else if (e.keyCode === 13) return false
    else if (e.keyCode === 17) {
      let previewHeight = this.preview.scrollHeight
      let textareaHeight = e.target.scrollHeight
      let height = Math.max(previewHeight, textareaHeight, DEFAULT_SIZE)
      this.setState({
        markdown: e.target.value,
        textareaHeight: height
      })
    } else if (e.keyCode === 8) {
      let previewHeight = this.preview.scrollHeight
      let textareaHeight = e.target.scrollHeight
      let height = Math.max(Math.min(previewHeight, textareaHeight), DEFAULT_SIZE)
      this.setState({
        textareaHeight: height
      })
    }
  }

  render () {

    return (
      <div className="MdEditor" style={{
        height: this.state.textareaHeight
      }}>
        <div className="markdown-input">
          <textarea onKeyDown={this.handleKeyPressMarkdown} onChange={this.handleInputMarkdown}
                    value={this.state.markdown}/>
        </div>
        <div ref={div => this.preview = div} className="markdown-preview">
          <ReactMarkdown source={this.state.markdown} className="markdown-body"/>
        </div>
      </div>
    )
  }
}