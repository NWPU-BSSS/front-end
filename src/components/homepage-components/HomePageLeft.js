import React, { Component } from 'react'

import './HomePageLeft.css'
import { QuickEntry } from './QuickEntry'
import { Container } from 'reactstrap'
import { TodayRecommend } from './TodayRecommend'
import { RecentBrowse } from './RecentBrowse'

export class HomePageLeft extends Component {

  render () {
    return (
      <div className="home-page-left">
        <QuickEntry/>
        <TodayRecommend/>
        <RecentBrowse/>
      </div>
    )
  }
}