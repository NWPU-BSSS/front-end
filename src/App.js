import './App.css'
import { Route } from 'react-router'
import React from 'react'
import './app-layout.css'
import { HomePage } from './pages/HomePage'
import { Layout } from './components/Layout'
import { BloggerSpacePage } from './pages/BloggerSpacePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { ReleaseBlogPage } from './pages/ReleaseBlogPage'
import { CodeEditPage } from './pages/CodeEditPage'
import { GuestHomePage } from './pages/GuestHomePage'
import { TestPage } from './pages/TestPage'
import { RegisterSuccessPage } from './pages/RegisterSuccessPage'
import { RegisterPage } from './pages/RegisterPage'

function App () {
  return (
    <Layout>
      <Route exact path="/" component={HomePage}/>
      <Route path="/blog" component={BlogPage}/>
      <Route path="/space" component={BloggerSpacePage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/release-blog" component={ReleaseBlogPage}/>
      <Route path="/code-edit" component={CodeEditPage}/>
      <Route path="/guest" component={GuestHomePage}/>
      <Route path="/reg-success" component={RegisterSuccessPage}/>
      <Route path="/test" component={TestPage}/>
      <Route path="/register" component={RegisterPage}/>
    </Layout>
  )
}

export default App
