import React, { Component } from 'react'
import './UserList.css'
import deleteIcon from '../../assets/img/u288.svg'

class UserListRow extends Component {

  render () {
    return (
      <div className="user-list-row">
        <div className="user-list-row-item">
          <input type="checkbox"/>
          {this.props.userName}
        </div>
        <div className="user-list-row-item">{this.props.nickName}</div>
        <div className="user-list-row-item">{this.props.avatar}</div>
        <div className="user-list-row-item">{this.props.introduction}</div>
        <div className="user-list-row-item">{this.props.gender}</div>
        <div className="user-list-row-item">
          <img src={deleteIcon}/>
          <a>Delete</a>
        </div>
      </div>
    )
  }

}

class UserListHead extends Component {

  render () {
    return (
      <div className="user-list-head">
        <div className="user-list-head-item">UserName</div>
        <div className="user-list-head-item">Nickname</div>
        <div className="user-list-head-item">Avatar</div>
        <div className="user-list-head-item">Introduction</div>
        <div className="user-list-head-item">Gender</div>
        <div className="user-list-head-item">Operation</div>
      </div>
    )
  }

}

export class UserList extends Component {
  render () {
    return (
      <div className="user-list">
        <UserListHead></UserListHead>

        <UserListRow userName='UserName1' nickName='DogSon' avatar='avatar1' introduction='DogSon is son of dog' gender='Male'></UserListRow>
      </div>
    )
  }
}