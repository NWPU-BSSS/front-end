import React, { Component } from 'react'
import { Image, Menu } from 'antd'
import { ContactsOutlined, FormOutlined, HomeOutlined, LogoutOutlined, NotificationOutlined } from '@ant-design/icons'
import { Link, Redirect, Route } from 'react-router-dom'
import styles from './AdminPage.module.css'
import logo from '../assets/img/bsss.png'
import { Switch as SwitchRouter } from 'react-router-dom'
import ReleaseAnnouncement from '../components/admin/ReleaseAnnouncement'
import AdminHome from '../components/admin/AdminHome'
import { AdminBlogPage } from '../components/admin/AdminBlogPage'
import { AdminUsersPage } from '../components/admin/AdminUsersPage'
import { connect } from 'react-redux'
import { ADMIN_PASSWORD, ADMIN_USERNAME } from '../global'

class AdminMenu extends Component {
  render () {

    return (
      <div className={styles.menu}>
        <Image src={logo}/>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          className={styles.menuContainer}
        >
          <Menu.Item key="1" icon={<HomeOutlined/>}>
            <Link to="/admin/insights">Insights</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FormOutlined/>}>
            <Link to="/admin/blogs">Blogs</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined/>}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<NotificationOutlined/>}>
            <Link to="/admin/announcement">Announcement</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined/>}>
            <Link to="/admin/logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default class AdminPage extends Component {

  render () {
    if (this.props.admin !== ADMIN_USERNAME || this.props.password !== ADMIN_PASSWORD) {
      return <Redirect to="/admin/login"/>
    }

    return (
      <div className={styles.container}>
        <AdminMenu/>
        <SwitchRouter>
          <Route path="/admin/insights">
            <AdminHome/>
          </Route>
          <Route path="/admin/blogs">
            <AdminBlogPage/>
          </Route>
          <Route path="/admin/users">
            <AdminUsersPage/>
          </Route>
          <Route path="/admin/announcement">
            <ReleaseAnnouncement/>
          </Route>
        </SwitchRouter>
      </div>
    )
  }
}

AdminPage = connect(
  ({ $AdminPageState: { admin, password } }) => ({
    admin,
    password
  })
)(AdminPage)