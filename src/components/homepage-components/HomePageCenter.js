import React, { Component } from 'react'
import { List, Avatar, Space, Radio, Tag } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './HomePageCenter.css'
import { ItemContent } from './@common/ItemContent'
import { TagList } from './@common/TagList'
import { IconText } from './@common/IconText'

export class HomePageCenter extends Component {

  static propTypes = {
    blogList: PropTypes.array.isRequired
  }

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
              <Radio value={1}>Recommend</Radio>
              <Radio value={2}>Followed</Radio>
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
            dataSource={this.props.blogList}
            renderItem={item => (
              <List.Item
                key={item.toString()}
                actions={[
                  <IconText icon={StarOutlined} text={item.favoriteNum || 0} key="list-vertical-star-o"/>,
                  <IconText icon={LikeOutlined} text={item.likeNum || 0} key="list-vertical-like-o"/>,
                  <IconText icon={MessageOutlined} text={item.commentNum || 0} key="list-vertical-message"/>,
                ]}>
                <List.Item.Meta
                  title={<Link to={`/blog/${item.blogId || 10}`}>{item.title || ''}</Link>}
                  description={<TagList tagA={item.tagA || ''} tagB={item.tagB || ''} tagC={item.tagC || ''}/>}
                />
                <ItemContent preview={item.preview || item.content} avatar={item.avatar}
                             lastModifiedTime={item.lastModifiedTime || 'unknow'}
                             nickname={item.nickname || 'anonymous'}
                             blogId={item.blogId}
                />
              </List.Item>
            )}
          />,
        </div>
      </div>
    )
  }
}