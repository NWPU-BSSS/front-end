import { Tag } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

export const TagList = props =>
  <div>
    <Tag color="red">{props.tagA}</Tag>
    <Tag color="green">{props.tagB}</Tag>
    <Tag color="blue">{props.tagC}</Tag>
  </div>

TagList.propTypes = {
  tagA: PropTypes.string,
  tagB: PropTypes.string,
  tagC: PropTypes.string
}