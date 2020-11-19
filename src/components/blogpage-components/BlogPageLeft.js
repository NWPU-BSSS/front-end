import React, { Component } from 'react'
import { Avatar, Button, Tag } from 'antd'
import { PayCircleOutlined } from '@ant-design/icons'
import avatar from '../../assets/temporary/u508.png'
import './BlogPageLeft.css'
import { BlogCategory } from './BlogCategory'

export class BlogPageLeft extends Component {

  render () {
    return (
      <div style={{
        minWidth: '250px',
        outline: '1px red solid',
        height: '1200px'
      }}>
        <BlogCategory/>
      <div style={{
        width: '320px',
        padding: '20px 0px',
      }}>
        <div style={{
          width: '100%',
          height: '86px',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div style={{
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Avatar size={60}
                    src={avatar}
            />
            <Tag style={{
              backgroundColor: 'white',
              border: '2px #D9001B solid',
              color: '#D9001B',
              fontSize: '16px',
              margin: 0,
            }}>Lv3</Tag>
          </div>
          <div style={{
            height: '100%',
            flexGrow: 2,
          }}>
            <div style={{
              height: '50%',
              fontSize: '20px',
              fontWeight: '700',
              lineHeight: '43px',
            }}>
              userName
            </div>
            <div style={{
              height: '50%',
              display: 'flex',
              flexDirection: 'row',
              lineHeight: '43px',
            }}>
              <div style={{
                fontSize: '18px',
                flexGrow: 1,
              }}>
                码龄7年
              </div>
              <PayCircleOutlined style={{
                flexGrow: 1,
                fontSize: '25px',
                color: 'red',
                display: 'block',
                paddingTop: '8px',
              }}/>
              <div style={{
                textAlign: 'center',
                fontSize: '18px',
                flexGrow: 1,
              }}>
                14011801班
              </div>
            </div>
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '60px',
        }}>
          <ul className={'info-list'}>
            <li>
              <div className={'info-content'}>
                1
              </div>
              <div className={'info-content'}>
                原创
              </div>
            </li>
            <li>
              <div className={'info-content'}>
                0
              </div>
              <div className={'info-content'}>
                粉丝
              </div>
            </li>
            <li>
              <div className={'info-content'}>
                21
              </div>
              <div className={'info-content'}>
                获赞
              </div>
            </li>
            <li>
              <div className={'info-content'}>
                34
              </div>
              <div className={'info-content'}>
                评论
              </div>
            </li>
            <li>
              <div className={'info-content'}>
                5
              </div>
              <div className={'info-content'}>
                收藏
              </div>
            </li>
          </ul>
        </div>

        <div style={{
          marginTop: '10px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
          <Button size={'large'}>TA的主义</Button>
          <Button size={'large'}>私信</Button>
          <Button size={'large'}>关注</Button>
        </div>
      </div>
      </div>
    )
  }
}