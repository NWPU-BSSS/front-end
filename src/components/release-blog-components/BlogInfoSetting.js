import React, { Component } from 'react'
import './BlogInfoSetting.css'
import { EditOutlined } from '@ant-design/icons'
import { Button, Avatar, Input, Tag } from 'antd'
import { TagList } from '../homepage-components/@common/TagList'

export class BlogInfoSetting extends Component {

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
          <div className="photo-tag">
            <EditOutlined />
          </div>
          <div>
            <TagList tagA={'Java'} tagB={'C#'} tagC={'ASP.NET Core'}/>
          </div>
        </div>
        <div className="bottom-btn">
          <div>
            <Button type="primary" danger>发布</Button>
            <Button type="dashed" danger>取消</Button>
            <Button danger>保存草稿</Button>
          </div>
        </div>
      </div>
    )
  }
}
