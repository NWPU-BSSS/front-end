import React, { Component } from 'react'
import { ProfileMenu } from '../components/profile-components/ProfileMenu'
import { Redirect, Route, Switch as SwitchRouter } from 'react-router'
import { PersonalInfo } from '../components/profile-components/PersonalInfo'
import { MyFavorite } from '../components/profile-components/MyFavorite'
import { MySubscribes } from '../components/profile-components/MySubscribes'
import { MyBlogs } from '../components/profile-components/MyBlogs'
import { UserSpaceTitle } from '../components/profile-components/UserSpaceTitle'
import MyFans from '../components/profile-components/MyFans'
import { ProfileMenuItem } from '../components/profile-components/ProfileMenuItem'
import { ProfileInfoContainer } from '../components/profile-components/ProfileInfoContainer'
import { ProfileBody } from '../components/profile-components/ProfileBody'
import { connect } from 'react-redux'
import { getUserInfoAsync, setUserInfoAsync, uploadUserAvatarAsync } from '../@redux/actions_async'
import { Layout } from '../components/Layout'
import { Modal, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

export class ProfilePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      fileList: []
    }
  }

  componentWillMount () {
    this.props.getUserInfoAsync()
  }

  handleChangeAvatar = () => {
    this.setState({ showModal: true })
  }

  handleModalChange = ({ fileList: newFileList }) => {
    this.setState({ fileList: newFileList })
  }

  handleModalPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }

  handleOk = () => {
    let file = this.state.fileList[0].originFileObj
    this.props.uploadUserAvatarAsync(file)
  }

  handleCancel = () => {
    this.setState({ showModal: false })
  }

  render () {
    const { fileList } = this.state
    return (
      <Layout>
        <UserSpaceTitle {...this.props.userInfo} changeAvatar={this.handleChangeAvatar}/>
        <ProfileBody>
          <ProfileMenu>
            <ProfileMenuItem title={`My Profile`} action="/profile/info"/>
            <ProfileMenuItem title={`My Favorite`} action="/profile/fav"/>
            <ProfileMenuItem title={`My Subscribes`} action="/profile/subscribe"/>
            <ProfileMenuItem title={`My Fans`} action="/profile/fans"/>
            <ProfileMenuItem title={`My Blogs`} action="/profile/blogs"/>
            <ProfileMenuItem title={`My Download`}/>
            <ProfileMenuItem title={`My Q&A`}/>
            <ProfileMenuItem title={`My School`}/>
            <ProfileMenuItem title={`Account Security`} action="/profile/safe"/>
          </ProfileMenu>
          <ProfileInfoContainer>
            <SwitchRouter>
              <Route path="/profile/info"><PersonalInfo/></Route>
              <Route path="/profile/blogs"><MyBlogs/></Route>
              <Route path="/profile/fav"><MyFavorite/></Route>
              <Route path="/profile/subscribe"><MySubscribes/></Route>
              <Route path="/profile/fans"><MyFans/></Route>
              <Redirect to="/profile/info"/>
            </SwitchRouter>
          </ProfileInfoContainer>
        </ProfileBody>
        <Modal
          title="Choose Your Avatar"
          visible={this.state.showModal}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
          <ImgCrop rotate>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={this.handleModalChange}
              onPreview={this.handleModalPreview}
            >
              {fileList.length < 1 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </Modal>
      </Layout>
    )
  }
}

ProfilePage = connect(
  state => {
    return {
      userInfo: state.$UserInfoState.userInfo
    }
  },
  { setUserInfoAsync, getUserInfoAsync, uploadUserAvatarAsync }
)(ProfilePage)
