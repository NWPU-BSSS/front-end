import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { IconText } from '../homepage-components/@common/IconText'
import  {List} from 'antd'
import { Link } from 'react-router-dom'
import { TagList } from '../homepage-components/@common/TagList'
import { ItemContent } from '../homepage-components/@common/ItemContent'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'

export class BaseBlogList extends Component {

  static propTypes = {
    blogList: PropTypes.array.isRequired
  }

  render () {
    return (
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
                         userId={item.userId}
            />
          </List.Item>
        )}
      />
    )
  }
}