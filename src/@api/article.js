import { postInit, query } from './@config'

export async function getArticleList () {
  let response = await fetch(`/api/articleList`)
  return await response.json()
}

export async function getArticleInfo ({ articleId }) {
  let response = await fetch(`/api/article?${query({ articleId })}`)
  return await response.json()
}

export async function releaseArticle ({ userId, content, title }) {
  let response = await fetch(`/api/article`,postInit({ userId, content, title }))
  return await response.json()
}