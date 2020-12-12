import React, { Component } from 'react'
import { List } from 'antd'
import styles from './RecentBrowse.module.css'
import { Link } from 'react-router-dom'

export class RecentBrowse extends Component {

  render () {
    return (
      <div className={styles.container}>
        <List
          size="large"
          header={<div style={{paddingLeft: 20}}>Recent Browse</div>}
          dataSource={this.props.data}
          renderItem={item => <List.Item>
            <Link to={`/blog/${item.blogId}`}>{item.title}</Link>
          </List.Item>}
        />
      </div>
    )
  }
}