import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticleInfoAsync, getArticleListAsync } from '../@redux/actions'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Article extends Component {

  static propTypes = {
    articleId: PropTypes.number
  }

  render () {
    return (
      <div style={{
        width: '75%',
        padding: '10px',
        margin: '0 auto'
      }}>
        <Link to={'/blog?articleId=' + this.props.articleId} className="hover-pointer" >
          <div>{this.props.children}</div>
        </Link>
      </div>
    )
  }
}

export class _HomePage extends Component {

  componentDidMount () {
    this.props.getArticleListAsync()
  }

  render () {
    return (
      <div style={{
        width: '100%',
        paddingTop: '50px'
      }}>
        <div style={{
          textAlign: 'center',
          fontSize: '24px',
          marginBottom: '25px'
        }}>
          以下为现有博客列表
        </div>
        <div style={{
          backgroundColor: '#f1f1f1',
          padding: '50px 0'
        }}>
          {this.props.articleList ? this.props.articleList.map((item, index) => <Article articleId={item.articleId}
                                                                                         key={index}>{item.title}</Article>) : ''}
        </div>
      </div>
    )
  }
}

const TemporaryHomePage = connect(
  state => ({ articleList: state.article.articleList }),
  { getArticleListAsync }
)(_HomePage)

export { TemporaryHomePage }