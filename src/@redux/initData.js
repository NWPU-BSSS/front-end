/**
 * 初始化用户状态
 * @type {{accessToken: string, userId: number}}
 */
export const initUserState = { userId: -1, accessToken: '' }


export const initUserInfo = {
  baseInfo: {},
  badgeNum: {},
  userInfo: {},
  recentBrowseBlogs: [],
  fans: [],
  subscribes: []
}

export const initBlogPage = {
  title: '',
  content: '',
  likeNum: 0,
  commentNum: 0,
  favoriteNum: 0,
  comments: []
}

export const initHomePage = {

}

export const initReleaseBlogPage = {
  content: `
# Markdown Online Editor
## Subtitle

common content

### Little title

    Code Block
  
### Code Syntax Highlight
~~~js
console.log('hello bsss')
~~~
`,
  tags: { tagA: 'TagA', tagB: 'TagB', tagC: 'TagC' },
  title: ''
}

export const initBloggerPage = {
  bloggerInfo: {},
  bloggerBlogs: []
}

export const initAdminPage = {
  username: '',
  password: '',
  users: [],
  blogs: []
}