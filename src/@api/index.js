import { register, login, getBadgeNum, getBaseInfo, sendVerifyCode2Email } from './root'
import { getBlog, addComment, getBlogger, getComments, getTags, releaseBlog} from './blog'
import { getTodayRecommend, getRecommendBlogList} from './home'

export {
  register,
  login,
  getBadgeNum,
  getBaseInfo,
  sendVerifyCode2Email,

  getTags,
  getComments,
  getBlogger,
  getBlog,
  releaseBlog,
  addComment,

  getTodayRecommend,
  getRecommendBlogList
}