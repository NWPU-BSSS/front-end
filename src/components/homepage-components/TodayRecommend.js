import React from 'react'
import { Card } from 'antd'
import './TodayRecommend.css'
import { connect } from 'react-redux'
import { getAnnouncementAsync } from '../../@redux/actions_async'
import { Link } from 'react-router-dom'

let TodayRecommend = props => {
  const { id, title, publisher, startTime, endTime, publishTime, content} = this.props

  return (
    <Card className="today-recommend" title="Today Recommend">
      <Link to={`/`} className="item">{title}</Link>
      <div className="item">{publisher}</div>
      <div className="item">{content}</div>
      <div className="item">{publishTime}</div>
    </Card>
  )
}

TodayRecommend = connect(
  state => ({ ...state['todayRecommend'] }),
  { getTodayRecommendAsync: getAnnouncementAsync }
)(TodayRecommend)

export {TodayRecommend}


