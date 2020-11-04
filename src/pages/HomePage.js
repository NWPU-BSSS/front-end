import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'

import './HomePage.css'
import { Col, Row } from 'antd'

export class HomePage extends Component {

  render () {
    return (
      <Row>
          {/*<Col lg={6}>*/}
          {/*  <HomePageLeft/>*/}
          {/*</Col>*/}
          {/*<Col lg={12} md={16}>*/}
          {/*  <HomePageCenter/>*/}
          {/*</Col>*/}
          {/*<Col lg={6} md={8}>*/}
          {/*  <HomePageRight/>*/}
          {/*</Col>*/}
      </Row>
    )
  }
}