import React, { Component } from 'react'
import { RelatedBlog } from './RelatedBlog'
import './RelatedBlogList.css'

export class RelatedBlogList extends Component {
  render () {
    return (
      <div className="OtherBlogList">
        <ul>
          <li>
            <RelatedBlog/>
          </li>
          <li>
            <RelatedBlog/>
          </li>
        </ul>
      </div>
    )
  }
}