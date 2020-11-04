import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'

import './HomePage.css'
import { Col, Row } from 'antd'

export class HomePage extends Component {

  render () {
    return (
      <Row gutter={48}>
        <Col lg={5} md={0} xs={0} sm={0}>
          <HomePageLeft/>
        </Col>
        <Col lg={14} md={16} xs={24} sm={24}>
          <HomePageCenter/>
        </Col>
        <Col lg={5} md={8} xs={0} sm={0}>
          <HomePageRight/>
        </Col>
      </Row>
    )
  }
}