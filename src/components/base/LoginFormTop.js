import React, { Component } from 'react'
import { Col, Image, Row, Typography } from 'antd'
import logo from '../../assets/img/bsss.png'

export class LoginFormTop extends Component {

  render () {
    const { Text } = Typography;

    return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItem: 'center'
    }}>
        <div style={{
          textAlign: 'center'
        }}>
          <Image
            width={173}
            height={72}
            src={logo}
          />
        </div>
        <div style={{
          textAlign: 'center',
          color: '#8a8b8d',
          margin: '15px'
        }}>BSSS - A Blog System for Software College</div>
    </div>
    )
  }
}