import './App.css'
import { Row, Col } from 'antd'
import { Route } from 'react-router'
import React from 'react'
import 'antd/dist/antd.css'
import './app-layout.css'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'


function App () {
  return (
    <Layout>
      <Route exact path="/" component={Home}/>
    </Layout>
  )
}

export default App
