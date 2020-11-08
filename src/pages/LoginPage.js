import React, { Component } from 'react'
import logo from '../assets/img/logo_u9.png'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import alilogo from '../assets/img/u206.png'
import tblogo from '../assets/img/u207.png'
import wblogo from '../assets/img/u208.png'
import { useState } from 'react'
import {
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  AutoComplete,
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const { Option } = Select
const AutoCompleteOption = AutoComplete.Option
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const RegistrationForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`))
    }
  }

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }))
  return (
    <div style={{
      align: 'center',
      width: '100%',
    }}>
      <Form
        style={{
          width:'100%'
        }}
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        scrollToFirstError
      >


        <Form.Item
          name="phone"
          label="手机号"
          rules={[
            {
              required: true,
              message: '请输入您的手机号!',
            },
          ]}
          style={{}}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item label="验证码" extra="">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: '请输入短信得到的验证码!',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="autoLogin"
          valuePropName="checked"
        >
          <Checkbox>
            自动登录
          </Checkbox>
          <a href="" style={{
            'textAlign': 'center',
            position: 'absolute',
            left: 320
          }}>忘记密码</a>
        </Form.Item>
        <Form.Item style={{}} {...tailFormItemLayout}>
          <div style={{
            'padding-left':'0px',
          }}>
            <Button type="primary" htmlType="submit" style={{
              width: 350,
            }}>
              登录
            </Button>
          </div>
        </Form.Item>
      </Form>
      <div style={{
        position:'absolute',
        'margin-left':'200px',
      }}>
        <Row>
          <Col>
            <p align='center'>其他登录方式</p>
          </Col>
          <Col>
            <a>
              <img src={alilogo} alt='ali' style={{
                width: '8%',
                marginRight: 10,
              }}/>
              <img src={tblogo} alt='tb' style={{
                width: '8%',
                marginRight: 10,
              }}/>
              <img src={wblogo} alt='wb' style={{
                width: '8%',
                marginRight: 10,
              }}/>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入账号!',
          },
        ]}
      >
        <Input style={{
          height: '40px',
          width: '300px'
        }} prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="账号"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input style={{
          height: '40px',
          width: '300px'
        }}
               prefix={<LockOutlined className="site-form-item-icon"/>}
               type="password"
               placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{
            'padding-left': '0px'
          }}>记住密码</Checkbox>
        </Form.Item>

        <a style={{
          'padding-left': '130px'
        }} className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item style={{
        align: 'right',
        position: 'relative',
        'margin-left': '80px'
      }}>
        <Button style={{
          width: '300px',
        }} type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        Or <a style={{
        'textAlign': 'right'
      }} href="">立即注册</a>
      </Form.Item>
    </Form>
  )
}

export class LoginPage extends Component {
  state = {
    current: 'mail',
    isShow: 'true'
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({ current: e.key })
    this.setState({ isShow: 'true' })
  }

  render () {
    const { current } = this.state
    const { isShow } = this.state
    return (
      <div style={{
        textAlign: 'center',
        width: '100%',
      }}>
        <div style={{
          'font-color': '#ccc'
        }}>
          <img src={logo} align="center" width='15%' height='20%' alt="bsss"/>
          <p style={{
            'font-size': '14px',
            'font-color': 'blue',
          }}></p>
        </div>
        <div style={{
          margin: '0 auto',
          textAlign: 'center'

        }}>
          <Menu style={{
            textAlign: 'center'
          }} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined/>}>
              账号密码登录
            </Menu.Item>
            <Menu.Item style={{
              'textAlign': 'right'
            }} key="app" icon={<AppstoreOutlined/>}>
              {/*disabled*/}
              手机验证码登录
            </Menu.Item>
          </Menu>
        </div>
        <div style={{
          display: this.state.current == 'mail' ? 'block' : 'none',
          width: '600px',
          textAlign: 'center',
          margin: '0 auto',
          'margin-top': '50px',
          'margin-down': '500px'
        }} className={isShow}>
          <NormalLoginForm/>
        </div>
        <div style={{
          display: this.state.current == 'app' ? 'block' : 'none',
          width: '600px',
          textAlign: 'center',
          margin: '0 auto',
          'margin-top': '50px'
        }} className={isShow}>
          <RegistrationForm style={{}}/>
        </div>
        <div style={{
          width:'100%',
          fontColor:'#ccc',
          position:'absolute',
          'padding-left':'600px',
          'padding-top':'100px'
        }}>
          <Row> <p>&nbsp; &nbsp;帮助&nbsp; &nbsp; &nbsp; &nbsp;隐私&nbsp; &nbsp; &nbsp; &nbsp;条款 </p>
            <hr/>
            <br/>
          </Row>
          <Row>
            <p>2017 蚂蚁金服体验技术部出品</p>
          </Row>

        </div>
      </div>

    )
  }
}