import { EyeOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import './BlogList.css'

class BlogItem extends Component {

  render () {
    return (
      <div className="blog">
        <div className="related-head">
          <div className="related-head-title">
            <a herf="">{this.props.blogtitle}</a>
          </div>
        </div>
        <div className="blog-content">
          <div>{this.props.blogcontent}</div>
        </div>
        <div className="read-record">
          <div>{this.props.blogamount} Read</div>
          <div>{this.props.datetime}</div>
        </div>
      </div>
    )
  }
}

export class BlogList extends Component {
  render () {
    return (
      <div className="BlogList">
        <BlogItem blogtitle={'不懂 Spring 就彻底放弃 Java 吧！！'} blogcontent=
          {'学习Java过不去的一个关卡就是Spring，如果搞不定Spring，做后端开发可以说是寸步难行。'}
                  blogamount={'123'} datetime={'2020-7-12'}/>
      </div>
    )
  }
}