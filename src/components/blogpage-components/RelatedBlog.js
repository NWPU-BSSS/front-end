import React, { Component } from 'react'
import './RelatedBlog.css'
import viewLogo from '../../assets/img/u583.png'

export class RelatedBlog extends Component {

  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div className={'related-blog'}>
        <div className={'related-head'}>
          <div className={'related-head-title'}>
            <a href={''}>Blog title</a>
          </div>
          <div className={'related-head-author'}>
            <a href={''}>UserX的博客</a>
          </div>
          <div className={'related-head-view'}>
            <img src={viewLogo} alt={'logo'}/>
            <div>
              8848
            </div>
          </div>
        </div>
        <div className={'related-content'}>
          content
        </div>
      </div>
    )
  }

}