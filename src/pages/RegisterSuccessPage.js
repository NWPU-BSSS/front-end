import React, { Component } from 'react'
import { LoginFormTop } from '../components/@common/LoginFormTop'
import { Button, Result } from 'antd'

export class RegisterSuccessPage extends Component {

  render () {
    return (
      <div>
        <LoginFormTop/>
        <div style={{
          width: '100%',
          margin: '0 auto'
        }}>
          <SuccessResult/>
        </div>
      </div>
    )
  }
}

class SuccessResult extends Component {
  render () {
    return (
      <Result
        status="success"
        title="你的帐户：AntDesign@example.com 注册成功"
        subTitle="激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。"
        extra={[
          <Button type="primary" key="checkout">
            查看邮箱
          </Button>,
          <Button key="back">返回首页</Button>,
        ]}
      />
    )
  }
}