import React, { Component } from 'react'
import { CopyrightOutlined } from '@ant-design/icons'

import './Footer.css'

import logo from '../assets/img/logo_u9.png'
import { Space } from 'antd'

export class Footer extends Component {

  render () {
    return (
      <div className="Footer">
        <div className="top">
          <a className="link">帮助</a>
          <a className="link">隐私</a>
          <a className="link">条款</a>
        </div>
        <div className="body" >
          <Space>
            <span>CopyRight</span>
            <CopyrightOutlined />
            <span>西北工业大学软件学院2018级B4出品</span>
          </Space>
        </div>
      </div>
    )
  }
}