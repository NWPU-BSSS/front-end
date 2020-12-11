import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import { FanItem } from './FanItem'

class FanList extends Component {
  render () {
    return (
      <List
        dataSource={this.props.fanList}
        renderItem={item => <FanItem {...item}/>}
      />
    )
  }
}

FanList.propTypes = {
  fanList: PropTypes.array.isRequired
}

export default FanList
