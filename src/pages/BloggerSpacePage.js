import React, { Component } from 'react'

export class BloggerSpacePage extends Component {

  render () {
    return (
      <div className="self-information">
        <div className="header">账号信息</div>
        <div className="line"></div>
        <button className="button">修改信息</button>
        <div className="information">
          <div className="form">ID</div><div className="detail">weixin_43595277</div>
          <div className="form">昵称</div><div className="detail">陆喵喵学长</div>
          <div className="form">简介</div><div className="detail">刘刘杰也叫陆喵喵</div>
          <div className="form">姓名</div><div className="detail">马上填写</div>
          <div className="form">性别</div><div className="detail">男</div>
        </div>

        <div className="header">学历信息</div>
        <div className="line"></div>
        <button className="button">学历认证</button>
        <div className="information">
          <div className="form">学校</div><div className="detail">西北工业大学</div>
          <div className="form">学院</div><div className="detail">软件学院</div>
          <div className="form">班级</div><div className="detail">14019999班</div>
          <div className="form">毕业时间</div><div className="detail">2022年6月</div>
        </div>

        <div className="header">简历上传</div>
        <div className="line"></div>
        <button className="button">简历上传</button>
        <div className="information">
          <div className="form">简历</div><div className="detail">待上传</div>
          <div className="form"></div><div className="detail">请上传5M以内，pdf或者word文件</div>
        </div>

      </div>

    )
  }
}