import React, { Component } from 'react'
import { Avatar, Tag } from 'antd'
import avatar from '../../assets/temporary/u508.png'
import { UserOutlined, FunctionOutlined } from '@ant-design/icons'
import './UserSpaceTitle.css'

export class UserSpaceTitle extends Component {

  render () {
    return (
      <div className="UserSpaceTitle" >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div>
            <Avatar size={100} src={avatar}/>
            <div style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '20px',
              color: 'white',
              fontWeight: '700',
            }}>
              码龄3年
            </div>
          </div>
          <div style={{
            marginLeft: '20px',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <UserOutlined style={{
                fontSize: '50px',
              }}/>
              <div style={{
                fontSize: '30px',
                marginLeft: '10px',
                color: 'white',
                fontWeight: '700',
              }}>
                陆喵喵学长
              </div>
            </div>

            <div style={{
              margin: '10px 0px 0px 42px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
                <UserOutlined style={{
                  fontSize: '25px',
                }}/>
                <div style={{
                  fontSize: '15px',
                  marginLeft: '10px',
                  color: 'white',
                }}>
                  1401xx0x班 学生
                </div>
                <Tag style={{
                  border: '2px solid #FEFE00',
                  fontSize: '10px',
                  marginLeft: '10px',
                  color: '#F1D279',
                  padding: '0 10px',
                }}>
                  V 已认证
                </Tag>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '15px 0px',
              }}>
                <FunctionOutlined style={{
                  fontSize: '25px',
                }}/>
                <div style={{
                  fontSize: '15px',
                  marginLeft: '10px',
                  color: 'white',
                }}>
                  刘刘杰也叫陆喵喵
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hexagon">
          Lv 3
        </div>
      </div>
    )
  }
}