import React, { Component } from 'react'
import { BlogPageLeft } from '../components/blogpage-components/BlogPageLeft'
import { BlogPageMain } from '../components/blogpage-components/BlogPageMain'
import './BlogPage.css'
import { ClassificationColumn } from '../components/blogpage-components/ClassificationColumn'
import { ThumbBox } from '../components/blogpage-components/ThumbBox'
class BlogPage extends Component {
  render () {
    return (
      <div className="BlogPage">
        <BlogPageLeft/>
        <BlogPageMain/>
      </div>
    )
  }
}

// BlogPage = connect(
// state => ({...state.article.articleInfo})
// )(BlogPage)

export { BlogPage }

