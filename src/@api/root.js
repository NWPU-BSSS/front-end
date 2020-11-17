import { getInit, postInit } from './@config'

export const register = async ({username, password,email, verifyCode}) => {
  let response =  await fetch('/api/register', postInit({username, password, email, verifyCode}))
  return response.json()
}


// export const getBadgeNum = async () => {
//   await fetch('/api/badgeNum', getInit())
// }