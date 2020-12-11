import React, { Component } from 'react'
import { AdminBlogSearch } from '../components/admin-blog-components/AdminBlogSearch'

class AdminBlogPage extends Component {

  componentWillMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <AdminBlogSearch />
      </div>
    )
  }
}

export { AdminBlogPage }