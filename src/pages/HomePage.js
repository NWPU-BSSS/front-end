import React, { Component } from 'react'
import { HomePageLeft } from '../components/homepage-components/HomePageLeft'
import { HomePageCenter } from '../components/homepage-components/HomePageCenter'
import { HomePageRight } from '../components/homepage-components/HomePageRight'
import PropTypes from 'prop-types'

import './HomePage.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { getBaseInfoAsync } from '../@redux/actions'

class HomePage extends Component {

  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
    getBaseInfoAsync: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.getBaseInfoAsync()

    // this.props.
  }

  render () {
    // if (!this.props.isLogin) {
    //   return <Redirect to="/login"/>
    // }

    return (
      <div className="HomePage">
        <HomePageLeft/>
        <HomePageCenter/>
        <HomePageRight/>
      </div>
    )
  }
}

HomePage = connect(
  state => ({ isLogin: state.userState.userId !== -1 }),
  { getBaseInfoAsync}
)(HomePage)

export { HomePage }