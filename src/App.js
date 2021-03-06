import './App.css'
import { Redirect, Route, Router, Switch } from 'react-router'
import React from 'react'
import './app-layout.css'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { BloggerPage } from './pages/BloggerPage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { ReleaseBlogPage } from './pages/ReleaseBlogPage'
import { CodeEditPage } from './pages/CodeEditPage'
import { GuestHomePage } from './pages/GuestHomePage'
import { RegisterSuccessPage } from './pages/RegisterSuccessPage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { TestPage } from './pages/TestPage'
import { connect } from 'react-redux'
import { Switch as SwitchRouter } from 'react-router-dom'
import { Button, Result } from 'antd'
import { loadUserState } from './@redux/actions'
import { SearchResultPage } from './pages/SearchResultPage'
import { AdminUsersPage } from './components/admin/AdminUsersPage'
import AdminPage from './pages/AdminPage'
import AdminLogin from './pages/AdminLogin'

class App extends React.Component {

  componentWillMount () {
    this.props.loadUserState()
  }

  render () {
    return (
      <SwitchRouter>
        <Route path="/home" component={HomePage}/>
        <Route path="/search/:word" component={SearchResultPage}/>
        <Route path="/blog/:blogId" component={BlogPage}/>
        <Route path="/blogger/:bloggerId" component={BloggerPage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/release-blog" component={ReleaseBlogPage}/>
        <Route path="/guest" component={GuestHomePage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/reg-success" component={RegisterSuccessPage}/>
        <Route path="/admin/login" component={AdminLogin}/>
        <Route path="/admin" component={AdminPage}/>
        <Route exact path="/"> <Redirect to="/home"/> </Route>
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
    )
  }
}

App = connect(
  () => {},
  { loadUserState }
)(App)

export default App
