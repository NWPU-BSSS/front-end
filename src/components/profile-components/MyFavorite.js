import React, { Component } from 'react'
import { BaseBlogList } from '../base/BaseBlogList'

export class MyFavorite extends Component {
  render () {
    return (
      <div className="BlogList">
        <BaseBlogList blogList={this.props.favBlogList}/>
      </div>
    )
  }
}