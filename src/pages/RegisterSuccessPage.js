import React, { Component } from 'react'
import logo from '../assets/img/logo_u9.png'
import { SuccessResult } from '../components/register-successful-components/SuccessResult'

export class RegisterSuccessPage extends Component {

  render () {
    return (
      <>

        <div style={{
          width: '100%',
          margin: '0 auto'
        }}>
          <div style={{
            width: 215,
            margin: '0 auto'
          }}>
            <img src={logo} alt={'logo'} style={{
              width: 215,
              height: 75,
              margin: '0 auto'
            }}/>
          </div>
        </div>

        <div style={{
          width: '100%',
          margin: '0 auto'
        }}>
          <div style={{
            width: 215,
            margin: '0 auto',
            'text-align': 'center'
          }}>
            <p style={{
              'font-size': '14px',
              'font-weight': 400,
              'color': '#0000006D'
            }}>
              为软件学院学生定制的博客网站
            </p>
          </div>
        </div>

        <div style={{
          width: '100%',
          margin: '0 auto'
        }}>
          <SuccessResult/>
        </div>
      </>
    )
  }

}