import request from '@support/request'

/**
 * 获取文章详情
 */
export function getArticleDetailApi(id) {
  return request({
    url: `/api/article/detail/${id}`,
    method: 'get'
  })
} 

/**
 * 获取文章列表
 */
export function getArticlesApi(params) {
  return request({
      url: '/api/article/list',
      method: 'get',
      params: params
  })
}

/**
 * 获取推荐文章
 */
export function getRecommendArticlesApi() {
  return request({
    url: '/api/article/getRecommends',
    method: 'get',
  })
}

/**
 * 获取评论列表
 */
export function getCommentsApi(params) {
    return request({
      url: `/api/comment/list`,
      method: 'get',
      params
    })
} 

/**
 * 获取分类
 */
export function getCategoriesApi() {
  return request({
    url: '/api/article/categories',
    method: 'get'
  })
}

/**
 * 获取所有分类
 */
export function getAllCategoriesApi() {
  return request({
    url: '/api/article/categorie-all',
    method: 'get'
  })
}


/**
 * 添加评论
 */
export function addCommentApi(data) {
    return request({
        url: '/api/comment/add',
        method: 'post',
        data
    })
}



/**
 * 点赞
 */
export function likeArticleApi(id) {
  return request({
    url: `/api/article/like/${id}`,
    method: 'get'
  })
}


/**
 * 获取时间线
 * @returns 
 */
export function getTimelineApi() {
  return request({
    url: `/api/getTimeline`,
    method: 'get'
  })
}

/**
 * 查询时间线文章
 * @param {*} date 时间线日期
 * @returns 
 */
export function queryTimelineArticlesApi(date) {
  return request({
    url: `/api/queryTimelineArticles`,
    method: 'get',
    params: {
      date
    }
  })
}

