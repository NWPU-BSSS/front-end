import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'

import './HomePage.css'
import { Col, Row } from 'antd'

export class HomePage extends Component {

  render () {
    return (
      <Row fluid className="home-page-container">
          <Col lg={3}>
            <HomePageLeft/>
          </Col>
          <Col lg={6} md={9}>
            <HomePageCenter/>
          </Col>
          <Col lg={3} md={3}>
            <HomePageRight/>
          </Col>
      </Row>
    )
  }
}