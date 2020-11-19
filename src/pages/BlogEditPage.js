import React, { Component } from 'react'
import './BlogEditPage.css'
import { BlogEditor } from '../components/editblog-components/BlogEditor'
import photo from '../assets/img/头像_u507.svg'
import photo_tag from '../assets/img/标签组_u514.svg'

export class BlogEditPage extends Component {

  render () {
    return (
      <div style={{ width: '100%' }} /*className="page-blog-edit"*/>
        <BlogEditor/>
        <div className="photo">
          <img src={photo} alt="头像"/>
        </div>
        <div className="blog-edit">
          <div className="blog-publish">
            发布博客
          </div>
          <p className="title-edit-box">
            <span className="title-text">点击输入标题</span>
          </p>

          <p className="tag-edit-box">
            <div className="photo_tag">
              <img src={photo_tag} alt="标签组"/>
            </div>
            <span className="tag-text">添加标签</span>
            <span className="tag-style">#机器学习#</span>
            <span className="tag-style">#Java#</span>
          </p>
          <button id={1} className="button-publish">发布</button>
          <button id={2} className="button-save">保存草稿</button>
          <button id={3} className="button-cancel">取消</button>
        </div>
      </div>
    )
  }
}
