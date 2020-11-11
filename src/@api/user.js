import { request } from './request'

export function login ({ email, password }) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 1,
      msg: 'ok',
      data: {
        userId: 1,
        userName: 'Chyoic'
      }
    })
  })
  // return request('http://localhost:3000/user/login', { email, password })
}