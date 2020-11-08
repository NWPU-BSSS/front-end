import React, { Component } from 'react'
import { Typography, Col, Row, Image } from 'antd'
import { RegistrationIMG } from '../components/register-components/RegistrationIMG'
import logo from '../assets/img/logo_u9.png'
import { RegistrationForm } from '../components/register-components/RegistrationForm'

export class RegisterPage extends Component {

  render () {
    const { Text } = Typography;

    return (
      <div style={{
        width: '100%',
      }}>
        <div style={{
          maxWidth: 500,
          margin: '0 auto'
        }}>
          <RegistrationIMG/>
          <RegistrationForm/>
        </div>
      </div>
    )
  }
}