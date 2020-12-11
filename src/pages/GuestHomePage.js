import React, { Component } from 'react'

import './GuestHomePage.css'

import photo from '../assets/img/log_pic_u3.jpg'
import { Layout } from '../components/Layout'

export class GuestHomePage extends Component {

  render () {
    return (
     <Layout>
       <div className="guest-home-page">
         <div className="title">
           Software School Blog
         </div>
         <div className="introduction">
           You can find many friends here.
         </div>
         <div className="photo">
           <img src={photo} alt="photo"/>
         </div>
       </div>
     </Layout>
    )
  }
}