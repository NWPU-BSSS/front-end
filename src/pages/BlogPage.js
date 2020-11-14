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
    this.props.getArticleInfoAsync(articleId)
  }

  render () {
    return (
      <div style={{
        width: '100%',
        padding: '150px'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bolder',
          textAlign: 'center'
        }}>{this.props.title || ''}</h1>
        <h2 style={{
          fontSize: '16px',
          fontWeight: 'normal',
          textAlign: 'right'
        }}>作者：{this.props.author || ''}</h2>
        <p style={{
          textIndent: '2em',
          fontSize: '18px',
          padding: '20px',
          backgroundColor: '#e0e0e0',
        }}>{this.props.content || ''}</p>
        <p style={{
          fontSize: '12px',
          textAlign: 'center',
          color: '#a0a0a0'
        }}>于 {this.props.time || ''} 发布</p>
      </div>
    )
  }
}

BlogPage = connect(
  state => ({ ...state.article.articleInfo }),
  { getArticleInfoAsync}
)(BlogPage)

export { BlogPage }

