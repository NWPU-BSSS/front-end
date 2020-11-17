import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'

import './HomePage.css'

export class HomePage extends Component {

  render () {
    return (
      <div className="home-page-container">
        <HomePageLeft/>
        <HomePageCenter/>
        <HomePageRight/>
      </div>
    )
  }
}