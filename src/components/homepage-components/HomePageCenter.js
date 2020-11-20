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
    blogId: i,
    userId: i,
    title: `博客${i}`,
    tagA: 'C#',
    tagB: 'python',
    tagC: 'JavaScript',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Bsss 软件学院的专属博客',
    preview:
      '软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客我们致力于打造属于软件学院的最棒的博客',
    nickname: '风神少女',
    lastModifiedTime: '2020-11-21',
    favoriteNum: i,
    likeNum: i + 1,
    commentNum: i + 2
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
      <div className="HomePageCenter">
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
                  <IconText icon={StarOutlined} text={item.favoriteNum} key="list-vertical-star-o"/>,
                  <IconText icon={LikeOutlined} text={item.likeNum} key="list-vertical-like-o"/>,
                  <IconText icon={MessageOutlined} text={item.commentNum} key="list-vertical-message"/>,
                ]}>
                <List.Item.Meta
                  title={<Link to="/blog?articleId=1">{item.title}</Link>}
                  description={<TagList tagA={item.tagA} tagB={item.tagB} tagC={item.tagC}/>}
                />
                <ItemContent preview={item.preview} avatar={item.avatar} lastModifiedTime={item.lastModifiedTime}
                             nickname={item.nickname}/>
              </List.Item>
            )}
          />,
        </div>
      </div>
    )
  }
}