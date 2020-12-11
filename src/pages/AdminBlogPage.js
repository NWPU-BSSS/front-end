import React, { Component } from 'react'
import { AdminBlogSearch } from '../components/admin-blog-components/AdminBlogSearch'
import { BlogTable } from '../components/admin-blog-components/AdminBlogTable'

class AdminBlogPage extends Component {

  componentWillMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <AdminBlogSearch/>
        <BlogTable/>
      </div>
    )
  }

}

export { AdminBlogPage }