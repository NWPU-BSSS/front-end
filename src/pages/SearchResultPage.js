import React, { Component } from 'react'
import { BaseBlogList } from '../components/base/BaseBlogList'
import styles from './SearchResultPage.module.css'
import { connect } from 'react-redux'
import { getSearchResultAsync } from '../@redux/actions_async'
import { Layout } from '../components/Layout'

export class SearchResultPage extends Component {
  componentWillMount () {
    let word = this.props.match.params.word
    this.props.getSearchResultAsync(word)
  }

  render () {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.title}>Search Result : {this.props.match.params.word}</div>
          <BaseBlogList blogList={this.props.searchBlogList}/>
        </div>
      </Layout>
    )
  }
}

SearchResultPage = connect(
  ({ $GlobalState: { searchBlogList } }) => ({
    searchBlogList
  }),
  { getSearchResultAsync }
)(SearchResultPage)