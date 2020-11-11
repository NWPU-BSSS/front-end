export function getArticleList () {
  return new Promise(resolve => {
    resolve({
      code: 1,
      msg: 'ok',
      data: [
        {
          articleId: 1,
          title: '文章1'
        },
        {
          articleId: 2,
          title: '文章2'
        },
        {
          articleId: 3,
          title: '文章3'
        },
      ]
    })
  })
}

export function getArticleInfo ({ articleId }) {
  return new Promise(resolve => {
    resolve({
      'code': 1,
      'msg': 'ok',
      'data': {
        'author': 'rain7',
        'content': 'hello word',
        'title': 'osu!mania',
        'time': '2020-1-1'
      }
    })
  })
}

export function releaseArticle ({ userId, content }) {
  return new Promise(resolve => {
    resolve({
      'code': 0,
      'msg': 'ok',
      'data': {
        'articleId': 10
      }
    })
  })
}