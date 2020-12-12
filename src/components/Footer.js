import React, { Component } from 'react'
import { CopyrightOutlined } from '@ant-design/icons'

import styles from './Footer.module.css'
import PropTypes from 'prop-types'
import { Space } from 'antd'
import { connect } from 'react-redux'
import { $Language } from '../@redux/reducers'

class Footer extends Component {
  static propTypes = {
    language: PropTypes.object
  }

  render () {
    const { Help, Privacy, Terms, ProductionTeam } = this.props.language
    const { Footer, body, top} = styles

    return (
      <div className={Footer}>
        <div className={top}>
          <a className="link">{Help}</a>
          <a className="link">{Privacy}</a>
          <a className="link">{Terms}</a>
        </div>
        <div className={body}>
          <Space>
            <span>CopyRight</span>
            <CopyrightOutlined/>
            <span>{ProductionTeam}</span>
          </Space>
        </div>
      </div>
    )
  }
}

Footer = connect(
  state => {
    return { language: state.$Language['NavMenuAndBottom'] }
  }
)(Footer)

export { Footer }

