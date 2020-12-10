import {getInit, postInit, query, request} from './@config'


/**
 * 发布博客
 * @param title 博客标题
 * @param content 博客内容
 * @param tagA 标签A
 * @param tagB 标签B
 * @param tagC 标签C
 * @returns {Promise<JSON>}
 */
export const releaseBlog = async ({ title, content, tagA = '', tagB = '', tagC = '' }) =>
  await request(`/api/blog?${query()}`, postInit({ title, content, tagA, tagB, tagC }))

/**
 * 收藏一个博客
 * @param {number}blogId
 * @param {boolean}favorite
 * @returns {Promise<JSON>}
 */
export const favBlog = async ({blogId, favorite}) =>
    request(`/api/blog/fav?${query()}`, postInit({blogId, favorite}))

/**
 * 点赞博客
 * @param {number}blogId
 * @param {boolean}like
 * @returns {Promise<JSON>}
 */
export const likeBlog = async ({blogId, like}) =>
    request(`/api/blog/like?${query()}`, postInit({blogId, like}))

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
  await request(`/api/blog/blogger/tags?${query({ bloggerId })}`)

/**
 * 获取博主详细信息
 * @param bloggerId
 * @returns {Promise<*>}
 */
export const getBlogger = async ({ bloggerId }) =>
  await request(`/api/blog/blogger?${query({ bloggerId })}`)

/**
 * 获取我对某个博客的收藏状态
 * @param {string}blogId
 * @returns {Promise<JSON>}
 */
export const getStatusOfFavoriteBlog = async ({blogId}) =>
    request(`/api/blog/fav?${query({blogId})}`,getInit())

/**
 * 获取我对某个博客的点赞状态
 * @param {string}blogId
 * @returns {Promise<JSON>}
 */
export const getStatusOfLikeBlog = async (blogId) =>
    request(`api/blog/like?${query({blogId})}`, getInit())