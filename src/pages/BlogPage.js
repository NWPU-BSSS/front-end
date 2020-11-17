import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getArticleInfoAsync } from '../@redux/actions'
import { urlParamParser } from '../@common/tool'

class BlogPage extends Component {

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    time: PropTypes.string
  }

  componentDidMount () {
    let params = urlParamParser(this.props.location.search)
    let articleId = params.get('articleId')
    // this.props.getArticleInfoAsync(articleId)
  }

  render () {
    return (
      <div>
        博客界面
      </div>
    )
  }
}

BlogPage = connect(
  state => ({ ...state.article.articleInfo }),
  { getArticleInfoAsync}
)(BlogPage)

export { BlogPage }

