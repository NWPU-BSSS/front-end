export function request (url, data) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.timeout = 25000
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          if (data.code) {
            resolve(data.data)
          } else {
            reject(data.msg)
          }
        } else {
          reject('请求错误')
        }
      }
    }
    xhr.ontimeout = function () {
      reject('网络请求超时，请稍后再试!')
    }
    xhr.onerror = function () {
      reject('网络连接失败，请检查您的网络！')
    }
    xhr.open('post', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(data)
  })
}