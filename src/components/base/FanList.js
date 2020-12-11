import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import { FanItem } from './FanItem'

class FanList extends Component {
  render () {
    return (
      <div style={{padding: 20}}>
        <List
          dataSource={this.props.fanList}
          renderItem={item => <FanItem {...item}/>}
        />
      </div>
    )
  }
}

FanList.propTypes = {
  fanList: PropTypes.array.isRequired
}

export default FanList
