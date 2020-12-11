import React, { Component } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import './HomePageCenter.css'
import { BaseBlogList } from '../base/BaseBlogList'
import { connect } from 'react-redux'
import { Redirect, Route, Switch as SwitchRouter } from 'react-router-dom'

export class HomePageCenter extends Component {

  static propTypes = {
    recommendBlogList: PropTypes.array,
    subscribeBlogList: PropTypes.array
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
              <Radio value={2}>Subscribed</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="blog-list">
          <SwitchRouter>
            <Route path="/home/recommend">
              <BaseBlogList blogList={this.props.recommendBlogList}/>
            </Route>
            <Route path="/home/subscribe">
              <BaseBlogList blogList={this.props.subscribeBlogList}/>
            </Route>
            <Redirect to="/home/recommend"/>
          </SwitchRouter>
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