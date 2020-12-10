import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Card, List } from 'antd'
import './ClassificationColumn.css'
import { LeftCard } from './common/LeftCard'

export class ClassificationColumn extends Component {

  static propTypes = {
    tagsList: PropTypes.array.isRequired
  }

  render () {

    return (
      <LeftCard
        header="Classification"
        body={
          <div className="ClassificationColumn">
            <List
              dataSource={this.props.tagsList}
              renderItem={item =>
                <List.Item className="list-item">
                  <div>{item.tag}</div>
                  <div>{item.count}P</div>
                </List.Item>}
              loadMore={<div className="text-center hover-pointer">...</div>}
            />
          </div>
        }
      />
    )
  }
}