import React, { Component } from 'react'
import { login } from '../@api'
import { BlogTable } from '../components/admin-blog-components/AdminBlogTable'
import { AdminBlogSearch } from '../components/admin-blog-components/AdminBlogSearch'

export class TestPage extends Component {

  render () {
    return (
      <div>
        <AdminBlogSearch/>
        <BlogTable/>
      </div>
    )
  }

  // handleClick = async () => {
  //   await login({ email: '925993394@qq.com', password: '0' })
  // }
  //
  // render () {
  //   return (
  //     <div>
  //       <button onClick={this.handleClick}>点击</button>
  //     </div>
  //   )
  // }


}