import { EyeOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import './MyBlogs.css'

class BlogItem extends Component {

  render () {
    return (
        <div className="My_blog">
          <div className="related-head">
            <div className="related-head-title">
              <a herf="">{this.props.blogtitle}</a>
            </div>
          </div>
          <div className="blog-content">
            <div>{this.props.blogcontent}</div>
          </div>
          <div className="read-record">
            <div>{this.props.blogamount}阅读</div>
            <div>{this.props.datetime}</div>
          </div>
        </div>
    )
  }
}

export class MyBlogs extends Component {
  render () {
    return (
        <div className="BlogList">
          <BlogItem blogtitle={'不懂 Spring 就彻底放弃 Java 吧！！'} blogcontent=
              {'学习Java过不去的一个关卡就是Spring，如果搞不定Spring，做后端开发可以说是寸步难行。'}
                    blogamount={'123'} datetime={'2020-7-12'}/>
          <BlogItem blogtitle={'不懂 Spring 就彻底放弃 Java 吧！！'} blogcontent=
              {'学习Java过不去的一个关卡就是Spring，如果搞不定Spring，做后端开发可以说是寸步难行。' +
              '一般人学习Spring都是先学习基本的用法，最佳实践，还有部分人会深入研究源代码，一..' +
              '.…………………………………………………………………………'} blogamount={'123'} datetime={'2020-7-12'}/>
          <BlogItem blogtitle={'不懂 Spring 就彻底放弃 Java 吧！！'} blogcontent=
              {'学习Java过不去的一个关卡就是Spring，如果搞不定Spring，做后端开发可以说是寸步难行。' +
              '一般人学习Spring都是先学习基本的用法，最佳实践，还有部分人会深入研究源代码，一..' +
              '.…………………………………………………………………………'} blogamount={'123'} datetime={'2020-7-12'}/>
        </div>
    )
  }
}