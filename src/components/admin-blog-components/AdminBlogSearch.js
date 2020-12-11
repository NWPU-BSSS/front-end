import React, { Component } from 'react'
import { Alert, Button, Input } from 'antd'
import './AdminBlogSearch.css'

class AdminBlogSearch extends Component {

  constructor (props) {
    super(props)
    this.state = {
      blogTitle: '',
      Tag: '',
    }
  }

  handleInputBlogTitle = e => {
    this.setState({
      blogTitle: e.target.value,
    })
  }

  handleInputTag = e => {
    this.setState({
      tag: e.target.value,
    })
  }

  handleReset = () => {
    this.setState({
      blogTitle: '',
      tag: '',
    })
  }

  handleQuery = () => {
    //TODO
  }

  render () {
    const total = 4 // TODO total selected item
    const message = total + ' items have been selected'

    return (
      <div className='blogSearch'>
        <div className='searchTitle'>
          <div className='blog-title-tag'>
            <div className='blogTitle'>
              Blog&nbsp;Title:&nbsp;
              <Input
                placeholder="input title"
                value={this.state.blogTitle}
                onChange={this.handleInputBlogTitle}
              />
            </div>
            <div className='blogTag'>
              Tag:&nbsp;
              <Input
                placeholder="input tag"
                value={this.state.tag}
                onChange={this.handleInputTag}
              />
            </div>
          </div>
          <div className='twoButton'>
            <Button
              className='queryButton'
              onClick={this.handleQuery}
            >
              Query
            </Button>
            <Button
              className='resetButton'
              onClick={this.handleReset}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className='infoText'>
          <Alert
            message={message}
            type="info"
            showIcon
            closeText="clear"
          />
        </div>
      </div>
    )
  }

}

export { AdminBlogSearch }