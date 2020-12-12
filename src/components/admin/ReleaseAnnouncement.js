import React, { Component } from 'react'
import styles from './ReleaseAnnouncement.module.css'
import { Button, DatePicker, Input, Space } from 'antd'
import { PageTitle } from './base/PageTitle'
import { connect } from 'react-redux'
import AdminPage from '../../pages/AdminPage'
import { releaseAnnouncement } from '../../@api'
import { asyncResponseHandler, success } from '../../@redux/@common'

export default class ReleaseAnnouncement extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      startTime: '',
      endTime: ''
    }
  }

  handleInputTitle = ({ target: { value: title } }) => {
    this.setState({ title })
  }

  handleInputContent = ({ target: { value: content } }) => {
    this.setState({ content })
  }

  handlePickDate = (_, [startTime, endTime]) => {
    this.setState({ startTime, endTime })
  }

  handleRelease = async () => {
    let { admin, password } = this.props
    debugger
    await asyncResponseHandler(await releaseAnnouncement({ admin, password, ...this.state }))
    success('Success')
  }

  render () {
    return (
      <div className={styles.container}>
        <PageTitle>Release Announcement</PageTitle>
        <div className={styles.pageMain}>
          <Space className={styles.box} direction="vertical">
            <Input onChange={this.handleInputTitle} placeholder="Input Announcement Title"/>
            <DatePicker.RangePicker showTime onChange={this.handlePickDate}/>
            <Input.TextArea autoSize={{ minRows: 20 }} allowClear
                            onChange={this.handleInputContent} placeholder="Input Announcement Content"/>
            <Button type="primary" block onClick={this.handleRelease}>Release</Button>
          </Space>
        </div>
      </div>
    )
  }
}

ReleaseAnnouncement = connect(
  ({ $AdminPageState: { admin, password } }) => ({
    admin,
    password
  })
)(ReleaseAnnouncement)