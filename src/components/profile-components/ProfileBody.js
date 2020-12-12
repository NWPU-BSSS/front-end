import React, { Component } from 'react'
import './Container.css'

class ProfileBody extends Component {
  render () {
    // const { PersonalInfo, AccountSecurity, Collection, Follower, Fans, MyBlog, MyDownload, MyAnswer, MyCollege} = languageHere;


    return (
      <div className="ProfileBody">
        {this.props.children}
      </div>
    )
  }
}


export { ProfileBody }