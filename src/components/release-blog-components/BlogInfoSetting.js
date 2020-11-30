import React, { Component } from 'react'
import './BlogInfoSetting.css'
import { EditOutlined } from '@ant-design/icons'
import { Button, Avatar, Input, Tag, Modal, Form, Space } from 'antd'
import { TagList } from '../homepage-components/@common/TagList'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editTag } from '../../@redux/actions'
import { releaseBlogAsync } from '../../@redux/actions_async'

class BlogInfoSetting extends Component {

  static propTypes = {
    editTag: PropTypes.func,
    content: PropTypes.string,
    title: PropTypes.string,
    tagA: PropTypes.string,
    tagB: PropTypes.string,
    tagC: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      tagA: 'TagA',
      tagB: 'TagB',
      tagC: 'TagC'
    }
  }

  handleRelease = () => {
    this.props.releaseBlogAsync({ ...this.props })
  }

  handleCancel = () => {
    alert('cancel release')
  }

  handleSaveDrafts = () => {
    alert('save drafts')
  }

  handleEditTag = () => {
    this.setState({ showModal: true })
  }

  handleModalOk = () => {
    this.props.editTag({ ...this.state })
    this.setState({ showModal: false })
  }

  handleModalCancel = () => {
    this.setState({ showModal: false })
  }

  handleInputTagA = e => {
    this.setState({ tagA: e.target.value })
  }

  handleInputTagB = e => {
    this.setState({ tagB: e.target.value })
  }

  handleInputTagC = e => {
    this.setState({ tagC: e.target.value })
  }

  render () {
    return (
      <div className="BlogInfoSetting" style={{ width: '100%' }}>
        <div className="blog-publish">
          Release Blog
        </div>
        <div className="title-edit-box">
          <Input placeholder="input title" allowClear/>
        </div>
        <div className="tag-edit-box">
          <div onClick={this.handleEditTag} className="edit-tag">
            Edit Tag
            <EditOutlined/>
          </div>
          <div>
            <TagList tagA={this.state.tagA} tagB={this.state.tagB} tagC={this.state.tagC}/>
          </div>
        </div>
        <div className="bottom-btn">
          <div>
            <Button type="primary" danger onClick={this.handleRelease}>Release</Button>
            <Button type="dashed" danger onClick={this.handleCancel}>Cancel</Button>
            <Button danger onClick={this.handleSaveDrafts}>Save Drafts</Button>
          </div>
        </div>
        <Modal visible={this.state.showModal}
               title="Edit Tag"
               onOk={this.handleModalOk}
               onCancel={this.handleModalCancel}
        >
          <Space direction="vertical">
            <Input placeholder="Please Input TagA" value={this.state.tagA}
                   onChange={this.handleInputTagA}/>
            <Input placeholder="Please Input TagB" value={this.state.tagB}
                   onChange={this.handleInputTagB}/>
            <Input placeholder="Please Input TagC" value={this.state.tagC}
                   onChange={this.handleInputTagC}/>
          </Space>
        </Modal>
      </div>
    )
  }
}

BlogInfoSetting = connect(
  state => {
    let { tags, content, title } = state['MarkdownEditor']
    return {
      ...tags,
      content,
      title
    }
  },
  { editTag, releaseBlogAsync }
)(BlogInfoSetting)

export { BlogInfoSetting }
