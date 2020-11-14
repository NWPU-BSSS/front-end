import React, { Component } from 'react'

import './GuestHomePage.css'

import photo from '../assets/img/log_pic_u3.jpg'

export class GuestHomePage extends Component {

  render () {
    return (
      <div className="guest-home-page">
        <div className="title">
          软件学院的专属博客
        </div>
        <div className="introduction">
          在这里，你可以找到更多有趣的朋友，获取更多有用的信息，学习更多有益的知识。
        </div>
        <div className="photo">
          <img src={photo} alt="合照"/>
        </div>
      </div>
    )
  }
}