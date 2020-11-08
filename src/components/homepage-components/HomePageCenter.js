import React, { Component } from 'react'

import './HomePageCenter.css'

import { List, Avatar, Space, Radio } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '/',
    title: `博客${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Bsss 软件学院的专属博客',
    content:
      '我们致力于打造属于软件学院的最棒的博客',
  })
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

export class HomePageCenter extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: 1,
    }
  }

  onChange = e => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  render () {
    return (
      <div className="home-page-center">
        <div className="top-select-option">
          <div className="select-container">
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>推荐</Radio>
              <Radio value={2}>关注</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="blog-list">
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page)
              },
              pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                ]}
                extra={
                  <img width={272}
                       alt="logo"
                       src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
                }>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar}/>}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />,
        </div>
      </div>
    )
  }
}