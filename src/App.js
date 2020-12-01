import './App.css'
import { Route } from 'react-router'
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

function App () {
  return (
    <Layout>
      <Route exact path="/" component={HomePage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/reg-success" component={RegisterSuccessPage}/>
      <Route path="/blog/:blogId" component={BlogPage}/>
      <Route path="/blogger/:bloggerId" component={BloggerSpacePage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/release-blog" component={ReleaseBlogPage}/>
      <Route path="/code-edit" component={CodeEditPage}/>
      <Route path="/guest" component={GuestHomePage}/>
      <Route path="/t" component={TestPage}/>
      <Route path="/edit" component={BlogInfoSetting}/>
    </Layout>
  )
}

export default App
