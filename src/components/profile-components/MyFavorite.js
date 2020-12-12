import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BaseBlogList } from '../base/BaseBlogList'
import { connect } from 'react-redux'
import { getFavBlogsAsync } from '../../@redux/actions_async'
import styles from './MyFavorite.module.css'

export class MyFavorite extends Component {
  static propTypes = {
    favBlogList: PropTypes.array
  }

  componentWillMount () {
    this.props.getFavBlogsAsync()
  }

  render () {
    return (
      <div className={styles.container}>
        <BaseBlogList blogList={this.props.favBlogs}/>
      </div>
    )
  }
}

MyFavorite = connect(
  ({ $UserInfoState: { favBlogs } }) =>
    ({ favBlogs }),
  { getFavBlogsAsync }
)(MyFavorite)