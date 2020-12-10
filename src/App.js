import './App.css'
import { Redirect, Route, Router, Switch } from 'react-router'
import React from 'react'
import './app-layout.css'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { BloggerSpacePage } from './pages/BloggerSpacePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { ReleaseBlogPage } from './pages/ReleaseBlogPage'
import { CodeEditPage } from './pages/CodeEditPage'
import { GuestHomePage } from './pages/GuestHomePage'
import { RegisterSuccessPage } from './pages/RegisterSuccessPage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { TestPage } from './pages/TestPage'
import { BlogInfoSetting } from './components/release-blog-components/BlogInfoSetting'
import { BlogList } from './components/blogger-space-components/BlogList'
import { connect } from 'react-redux'
import { setAccessToken } from './@redux/actions'
import { Switch as SwitchRouter } from 'react-router-dom'
import {Button,  Result } from 'antd'
import { loadUserState } from './@redux/actions'

class App extends React.Component {

  componentWillMount () {
    // let accessToken = localStorage.getItem('accessToken')
    // if (accessToken) {
    //   this.props.setAccessToken(accessToken)
    // }

    this.props.loadUserState()

  }

  render () {
    return (
      <Layout>
        <SwitchRouter>
          <Route path="/" exact component={HomePage}/>
          <Route path="/blog/:blogId" component={BlogPage}/>
          <Route path="/blogger/:bloggerId" component={BloggerSpacePage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/release-blog" component={ReleaseBlogPage}/>
          <Route path="/code-edit" component={CodeEditPage}/>
          <Route path="/edit" component={BlogInfoSetting}/>
          <Route path="/guest" component={GuestHomePage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/reg-success" component={RegisterSuccessPage}/>
          <Route path="/t" component={TestPage}/>
          <Route>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button href="/" type="primary">Back Home</Button>}
            />
          </Route>
        </SwitchRouter>
      </Layout>
    )
  }
}

App = connect(
  () => {},
  { loadUserState }
)(App)

export default App
