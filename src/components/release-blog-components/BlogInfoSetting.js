import React, { Component } from 'react'
import './BlogInfoSetting.css'
import { EditOutlined } from '@ant-design/icons'
import { Button, Avatar, Input, Tag, Modal, Form, Space } from 'antd'
import { TagList } from '../homepage-components/@common/TagList'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { editTag } from '../../@redux/actions'

class BlogInfoSetting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      tagA: 'TagA',
      tagB: 'TagB',
      tagC: 'TagC'
    }
  }

  handleEditTag = () => {
    this.setState({ showModal: true })
  }

  handleOk = () => {
    this.props.editTag({ ...this.state })
    this.setState({ showModal: false })
  }

  handleCancel = () => {
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
          发布博客
        </div>
        <div className="title-edit-box">
          <Input placeholder="请输入标题" allowClear/>
        </div>
        <div className="tag-edit-box">
          <div onClick={this.handleEditTag} className="edit-tag">
            编辑标签
            <EditOutlined/>
          </div>
          <div>
            <TagList tagA={this.state.tagA} tagB={this.state.tagB} tagC={this.state.tagC}/>
          </div>
        </div>
        <div className="bottom-btn">
          <div>
            <Button type="primary" danger>发布</Button>
            <Button type="dashed" danger>取消</Button>
            <Button danger>保存草稿</Button>
          </div>
        </div>
        <Modal visible={this.state.showModal}
               title="编辑标签"
               onOk={this.handleOk}
               onCancel={this.handleCancel}
        >
          <Space direction="vertical">
            <Input placeholder="请输入TagA" value={this.state.tagA}
                   onChange={this.handleInputTagA}/>
            <Input placeholder="请输入TagB" value={this.state.tagB}
                   onChange={this.handleInputTagB}/>
            <Input placeholder="请输入TagC" value={this.state.tagC}
                   onChange={this.handleInputTagC}/>
          </Space>
        </Modal>
      </div>
    )
  }
}

BlogInfoSetting = connect(
  state => ({
    tagA: state['MarkdownEditor'].tags.tagA,
    tagB: state['MarkdownEditor'].tags.tagB,
    tagC: state['MarkdownEditor'].tags.tagC,
  }),
  { editTag }
)(BlogInfoSetting)

export { BlogInfoSetting }
