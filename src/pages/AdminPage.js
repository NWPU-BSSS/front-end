import PropTypes from 'prop-types'
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
import { ADMIN_PASSWORD, ADMIN_USERNAME, get_admin_state, remove_admin_state, set_admin_state } from '../global'
import { admin_login, admin_logout } from '../@redux/actions'

class AdminMenu extends Component {
  static propTypes = {
    handleLogout: PropTypes.func
  }

  constructor (props) {
    super(props)
  }

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
            <Link onClick={this.props.handleLogout}>Logout</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default class AdminPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logoutFlag: false
    }
  }

  componentWillMount () {
    let adminState = get_admin_state()
    if (!adminState) {
      this.setState({ logoutFlag: true })
    }
  }

  handleLogout = () => {
    remove_admin_state()
    this.setState({ logoutFlag: true })
  }

  render () {
    if (this.state.logoutFlag) {
      return <Redirect to="/admin/login"/>
    }
    return (
      <div className={styles.container}>
        <AdminMenu handleLogout={this.handleLogout}/>
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
          <Redirect to="/admin/insights"/>
        </SwitchRouter>
      </div>
    )
  }
}

AdminPage = connect(
  ({ $AdminPageState: { admin, password } }) => ({
    admin,
    password
  }),
  { admin_logout, admin_login }
)(AdminPage)