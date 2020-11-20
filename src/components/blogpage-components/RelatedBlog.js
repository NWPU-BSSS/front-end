import React, { Component } from 'react'
import './RelatedBlog.css'
import { EyeOutlined } from '@ant-design/icons'

export class RelatedBlog extends Component {

  render () {
    return (
      <div className="related-blog">
        <div className="related-head">
          <div className="related-head-title">
            <a href="">Blog title</a>
          </div>
          <div className="related-head-author">
            <a href="">UserX的博客</a>
          </div>
          <div className="related-head-view">
            <EyeOutlined />
            <div>
              8848
            </div>
          </div>
        </div>
        <div className="related-content">
          content
        </div>
      </div>
    )
  }

}