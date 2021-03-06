import axios from './axios'


export const getBookDetails = params => axios.get("/book/" + params)
export const getFriendList = () => axios.get("/user/friends")
export const getMsgList = params => axios.get("/user/msgList", { params: params })
export const sendMsg = params => axios.post("/user/msg", params)
export const getUserDynamic = params => axios.get("/dynamic/" + params)
export const getUserDynamicInfo = params => axios.get("/info/" + params)
export const followUser = params => axios.post("/user/follow", params)
export const cancelFollow = params => axios.delete("/user/follow/" + params)
export const hasRelation = params => axios.get("/user/relation", { params: params })

/**
 * 获取首页数据
 */
export const getHomeBooks = params => axios.get('/books', { params: params })

/**
 * 判断用户名是否存在 
 */
export const usernameIsSave = params => axios.get('/usernameIsSave', { params: params })
/**
 * 用户注册
 */
export const userRegister = params => axios.post('/register', params)
/**
 * 用户登录
 */
export const userLogin = params => axios.post('/login', params)
/**
 * 用户登出
 */
export const userLogout = () => axios.get('/logout')
/**
 * 获取用户头像
 */
export const getUserAvatarUrl = () => axios.get('/user/avatarUrl')
/** 
 * 获取用户信息
 */
export const getUserInfo = () => axios.get("/user/info")
/**
 * 获取用户的收藏
 */
export const getUserCollection = params => axios.get('/user/collect', { params: params })
/**
 * 获取用户的推荐
 */
export const getUserRecommends = params => axios.get('/user/recommends', { params: params })
/** 
 * 上传用户的头像
 */
export const uploadImg = params => axios.post('/upload', params,
    { headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryRxBAK8uWAfdSgGT1' } })
/** 
 * 修改用户信息 
 */
export const updateUserProfile = params => axios.post("/user/info", params)
export const deleteCacheImg = params => axios.delete("/img", { params: params })
/**
 * 上传用户的推荐
 */
export const uploadUserRecommend = params => axios.post('/user/recommend', params)
export const uploadRecommendForBook = params => axios.post('/user/book/recommend', params)
export const getHomeRecommends = params => axios.get('/recommends', { params: params })
export const isStar = params => axios.get('/user/isStar', { params: params })
export const isCollection = params => axios.get('/user/isCollection', { params: params })
export const cancelCollection = params => axios.delete('/user/collection', { params: params })
export const addCollection = params => axios.post('/user/collection', params)
export const cancelStar = params => axios.delete('/user/star', { params: params })
export const addStar = params => axios.post('/user/star', params)