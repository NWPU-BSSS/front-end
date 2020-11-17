import React, { Component } from 'react'
import { List, Avatar, Space, Radio, Tag } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './HomePageCenter.css'
import { ItemContent } from './@common/ItemContent'
import { TagList } from './@common/TagList'
import { IconText } from './@common/IconText'

const listData = []
for (let i = 0; i < 15; i++) {
  listData.push({
    href: '/',
    title: `博客${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Bsss 软件学院的专属博客',
    content:
      '我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客',
    nickname: '风神少女',
    tagA: 'C#',
    tagB: 'python',
    tagC: 'JavaScript',
    createTime: '2020-11-21'
  })
}

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
                ]}>
                <List.Item.Meta
                  title={<Link to="/blog?articleId=1">{item.title}</Link>}
                  description={<TagList tagA={item.tagA} tagB={item.tagB} tagC={item.tagC}/>}
                />
                <ItemContent content={item.content} avatar={item.avatar} createTime={item.createTime} title={item.title}/>
              </List.Item>
            )}
          />,
        </div>
      </div>
    )
  }
}