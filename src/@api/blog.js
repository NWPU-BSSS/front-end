import { postInit, query, request } from './@config'

/**
 * 发布博客
 * @param title 博客标题
 * @param content 博客内容
 * @param tagA 标签A
 * @param tagB 标签B
 * @param tagC 标签C
 * @returns {Promise<JSON>}
 */
export const releaseBlog = async ({ title, content, tagA = null, tagB = null, tagC = null }) =>
  await request('/api/blog', postInit({ title, content, tagA, tagB, tagC }))

/**
 * 在指定博客评论区发表评论
 * @param blogId 评论区所属博客Id
 * @param content 评论内容
 * @param commentId 评论指向的评论Id，如果为主楼评论，则此值为空
 * @returns {Promise<JSON>}
 */
export const addComment = async ({ blogId, content, commentId = null }) =>
  await request(`/api/blog/comment?${query({ blogId })}`, postInit({ content, commentId }))

/**
 * 获取指定博客的详细信息
 * @param blogId
 * @returns {Promise<JSON>}
 */
export const getBlog = async ({ blogId }) =>
  await request(`/api/blog?${query({ blogId })}`)

/**
 * 获取指定博客评论区的评论列表
 * @param blogId 评论区所属博客
 * @returns {Promise<JSON>}
 */
export const getComments = async ({ blogId }) =>
  await request(`/api/blog/comments?${query({ blogId })}`)

/**
 * 获取博客住分类标签区的内容，标签名，标签个数
 * @param bloggerId
 * @returns {Promise<JSON>}
 */
export const getTags = async ({ bloggerId }) =>
  await request(`/api/blog/blogger/tags?${query(bloggerId)}`)

/**
 * 获取博主详细信息
 * @param bloggerId
 * @returns {Promise<*>}
 */
export const getBlogger = async ({ bloggerId }) =>
  await request(`/api/blog/blogger?${query(bloggerId)}`)