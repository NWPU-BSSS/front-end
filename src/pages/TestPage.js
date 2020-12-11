import React, { Component } from 'react'
import { Statistic } from 'antd'
import './AdminHome.module.css'
import AdminHome, { InfoItem } from './AdminHome'

export class TestPage extends Component {

  // handleClick = async () => {
  //   await login({ email: '925993394@qq.com', password: '0' })
  // }
  //

  render () {
    return (
      <AdminHome>
        <InfoItem count={123} text="Blogs"/>
        <InfoItem count={123} text="New Blogs"/>
        <InfoItem count={123} text="Users"/>
        <InfoItem count={123} text="New Users"/>
      </AdminHome>
    )
  }

}