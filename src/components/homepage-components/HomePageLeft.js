import React, { Component } from 'react'

import './HomePageLeft.css'
import { QuickEntry } from './QuickEntry'
import { TodayRecommend } from './TodayRecommend'
import { RecentBrowse } from './RecentBrowse'

export class HomePageLeft extends Component {

  render () {
    return (
      <div className="HomePageLeft">
        <QuickEntry/>
        <TodayRecommend/>
        <RecentBrowse/>
      </div>
    )
  }
}