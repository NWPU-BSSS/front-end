import React, { Component } from 'react'
import { List, Avatar, Space, Radio, Tag } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './HomePageCenter.css'
import { ItemContent } from './@common/ItemContent'
import { TagList } from './@common/TagList'
import { IconText } from './@common/IconText'
import { BaseBlogList } from '../base/BaseBlogList'
import { connect } from 'react-redux'

export class HomePageCenter extends Component {

  static propTypes = {
    recommendBlogList: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      value: 1,
    }
  }

  onChange = e => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  render () {
    return (
      <div className="HomePageCenter">
        <div className="top-select-option">
          <div className="select-container">
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>Recommend</Radio>
              <Radio value={2}>Followed</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="blog-list">
          <BaseBlogList blogList={this.props.recommendBlogList}/>
          <BaseBlogList blogList={this.props.subscribeBlogList}/>
        </div>
      </div>
    )
  }
}

HomePageCenter = connect(
  ({ $HomePageState: { recommendBlogList, subscribeBlogList } }) => ({
    recommendBlogList,
    subscribeBlogList,
  })
)(HomePageCenter)