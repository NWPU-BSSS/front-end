import React, { Component } from 'react'
import { btnDanger } from './@button-style'
import './NavMenuSearch.css'
import PropTypes from 'prop-types'
import { Button, Input, Space } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSearchResultAsync } from '../../@redux/actions_async'

export class NavMenuSearch extends Component {

  constructor (props) {
    super(props)
    this.state = {
      word: '*'
    }
  }

  static propTypes = {
    language: PropTypes.object.isRequired
  }

  handleInput = ({ target: { value: word } }) => {
    this.setState({ word })
  }

  handleSearch = () => {
    this.props.getSearchResultAsync(this.state.word)
  }

  render () {
    const { Search } = this.props.language
    return (
      <Space>
        <Input type="text" placeholder={Search} onChange={this.handleInput}/>
        <Link to={`/search/${this.state.word}`}>
          <Button onClick={this.handleSearch} type="primary" danger>{Search}</Button>
        </Link>
      </Space>
    )
  }
}

NavMenuSearch = connect(
  () => {},
  { getSearchResultAsync }
)(NavMenuSearch)