import React, { Component } from 'react'
import { Row, Container, Col } from 'reactstrap'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'

import './HomePage.css'

export class HomePage extends Component {

  render () {
    return (
      <Container fluid className="home-page-container">
        <Row>
          <Col lg={3} className="d-md-flex">
            <HomePageLeft/>
          </Col>
          <Col lg={6} md={9}>
            <HomePageCenter/>
          </Col>
          <Col lg={3} md={3}>
            <HomePageRight/>
          </Col>
        </Row>
      </Container>
    )
  }
}