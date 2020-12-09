import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HomePageLeft.css'
import { QuickEntry } from './QuickEntry'
import { TodayRecommend } from './TodayRecommend'
import { RecentBrowse } from './RecentBrowse'
import { connect } from 'react-redux'
import { getAnnouncementAsync } from '../../@redux/actions_async'

class HomePageLeft extends Component {

  static propTypes = {
    announcement: PropTypes.object
  }

  componentWillMount () {
    this.props.getTodayRecommendAsync()
  }

  render () {
    let TC
    if (this.props.announcement) {
      TC = <TodayRecommend {...this.props.announcement}/>
    }

    return (
      <div className="HomePageLeft">
        <QuickEntry/>
        {/*{TC}*/}
        <RecentBrowse/>
      </div>
    )
  }
}

HomePageLeft = connect(
  state => {
    const { browse, announcement } = state.$HomePageState
    return {
      announcement,
      browse
    }
  },
  { getTodayRecommendAsync: getAnnouncementAsync}
)(HomePageLeft)

export {HomePageLeft}