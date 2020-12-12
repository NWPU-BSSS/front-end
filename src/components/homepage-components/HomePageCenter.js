import React, { Component } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import './HomePageCenter.css'
import { BaseBlogList } from '../base/BaseBlogList'
import { connect } from 'react-redux'

export class HomePageCenter extends Component {

  static propTypes = {
    followedBlogList: PropTypes.array,
    recentBlogList: PropTypes.array,
    recommendBlogList: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ index: value })
  }

  render () {
    return (
      <div className="HomePageCenter">
        <div className="top-select-option">
          <div className="select-container">
            <Radio.Group onChange={this.onChange} value={this.state.index}>
              <Radio value={0}>Recommend</Radio>
              <Radio value={1}>Subscribed</Radio>
              <Radio value={2}>Newest</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="blog-list">
          {[<BaseBlogList blogList={this.props.recommendBlogList}/>,
            <BaseBlogList blogList={this.props.followedBlogList}/>,
            <BaseBlogList blogList={this.props.recentBlogList}/>]
            [this.state.index]}
        </div>
      </div>
    )
  }
}

HomePageCenter = connect(
  ({ $HomePageState: { recommendBlogList, followedBlogList, recentBlogList } }) => ({
    recommendBlogList,
    followedBlogList,
    recentBlogList
  })
)(HomePageCenter)